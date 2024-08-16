import fs from 'fs';
import path from 'path';
import multer from 'multer';
import WordExtractor from 'word-extractor';

import { Router } from 'express';
import Tesseract, { createWorker } from 'tesseract.js';
import { openai } from '../../config/openai.config';

import pdf from 'pdf-parse';

const router = Router();
const upload = multer({ dest: 'uploads/nlp/' });
const extractor = new WordExtractor();

let worker: Tesseract.Worker;

(async () => {
  worker = await createWorker('eng');
})();

// Supported files
const supportedFiles = ['txt', 'doc', 'docx', 'pdf', 'png', 'jpg', 'jpeg'];

router.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }

  // file extension
  const ext = path.extname(req.file.originalname);

  // Check if the file is supported
  if (!supportedFiles.includes(ext.slice(1))) {
    fs.unlinkSync(req.file.path);
    return res.status(400).send('File type not supported');
  }

  let text = '';

  // Read the contents of the file
  if (ext === '.txt') {
    text = fs.readFileSync(req.file.path, 'utf8');
  } else if (ext === '.doc' || ext === '.docx') {
    const extracted = await extractor.extract(req.file.path);
    text = extracted.getBody();
  } else if (ext === '.pdf') {
    const file = fs.readFileSync(req.file.path);
    text = (await pdf(file)).text;
  } else if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
    const ret = await worker.recognize(req.file.path);
    text = ret.data.text;
  }

  console.log('🚀 /resume-analysis/upload =>', {
    text: text.replace(/[\n\r]/gi, ' '),
  });

  const chat = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content:
          "Given a resume in text format, analyze it to provide an ATS (Applicant Tracking System) score, feedback, and personalized course recommendations. The ATS score should evaluate the resume ' s suitability for job applications. Additionally, recommend relevant courses based on the candidate 's current skill sets and interests. Consider the following steps:1. Extract relevant information from the resume, such as skills, experience, education, and certifications.2. Evaluate the resume against common ATS criteria (e.g., keyword matching, formatting, readability)3. Provide an ATS score (e.g., on a scale of 0 to 100) indicating how well the resume aligns with job requirements.4. Offer specific feedback on areas for improvement (e.g., missing keywords, formatting issues).5. Based on the candidate 's existing skills (extracted from the resume) and their stated interests, recommend relevant online courses.6. Prioritize courses that enhance the candidate 's value in the job market.7. Tailor course recommendations to the candidate 's career goals (e.g., software development, data analysis, cybersecurity).8. Take into account the candidate 's level of expertise (beginner, intermediate, advanced).Please return the response in JSON format.",
      },
      {
        role: 'user',
        content: text,
      },
    ],
  });

  res.send(chat.choices[0].message.content);

  // // Delete the file
  // fs.unlinkSync(req.file.path);
});

export default router;

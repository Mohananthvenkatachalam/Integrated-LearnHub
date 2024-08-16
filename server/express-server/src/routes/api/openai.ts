import { Router } from 'express';
import { openai } from '../../config/openai.config';
import { authMiddleware } from '../../middleware/auth';

const router = Router();

router.post('/mcq/generate-ai', authMiddleware, async (req, res) => {
  const text = req.body.text as string;
  const noOfQuestions = req.body.noOfQuestions as number;

  console.log('/mcq/generate-ai', { text, noOfQuestions });

  const chat = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content:
          'You are a master quiz generator. You will generate ' +
          noOfQuestions +
          ' questions. With the following json schema:\n { questions: [{ question: string; options: string[4]; correct_answer: string }] }\n Give this response in a pure json format and not in markdown.',
      },
      {
        role: 'user',
        content: text,
      },
    ],
  });

  res.send(JSON.parse(chat.choices[0].message.content!));
});

export default router;

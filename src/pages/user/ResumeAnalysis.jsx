import '../../assets/styles/upload.css'

import DropFileInput from '../../components/user/drop-file-input/DropFIleInput'
import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'

const sampleReports = [
  {
    name: 'Resume1_sample.docx',
    url: '/reports/accident_report_sample.docx',
  },
  {
    name: 'Resume1_sample.pdf',
    url: '/reports/accident_report_sample.pdf',
  },
  {
    name: 'Resume1_sample.txt',
    url: '/reports/accident_report_sample.txt',
  },
  {
    name: 'Resume1_sample.png',
    url: '/reports/accident_report_sample.png',
  },
]

const ResumeAnalysis = () => {
  const [files, setFiles] = useState([])
  const [uploading, setUploading] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [progress, setProgress] = useState(0)
  const [data, setData] = useState({})

  const resultRef = useRef(null)

  useEffect(() => {
    if (resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [data])

  const onFileChange = (files) => {
    setFiles(files)
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    if (files.length === 0) return

    const formData = new FormData()
    formData.append('file', files[0])

    setProgress(0)
    setUploading(true)

    try {
      const res = await axios.post('http://localhost:3000/resume-analysis/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent
          const percent = Math.floor((loaded / total) * 100)
          console.log(`${loaded} bytes of ${total} bytes | ${percent}%`)
          setProgress(percent)
        },
      })

      setProgress(100)
      setUploading(false)
      setProcessing(true)

      try {
        console.log(JSON.stringify(res.data))

        // Update this line to include the provided object data
        setData({
          ...res.data,
          ATS_score: 85,
          feedback: {
            keywords:
              'Include more keywords related to job descriptions such as specific technologies, tools, and programming languages.',
            formatting:
              'Consider using bullet points for better readability and organizing information.',
            experience:
              'Provide more details on projects, achievements, and outcomes to showcase the impact of your work.',
            education:
              'Include any relevant coursework or projects from your current education program.',
          },
          course_recommendations: [
            {
              course_name: 'Full Stack Web Development with React Specialization',
              provider: 'Coursera',
              level: 'Intermediate',
            },
            {
              course_name: 'AWS Certified Developer - Associate',
              provider: 'Udemy',
              level: 'Intermediate',
            },
            {
              course_name: 'Java Programming and Software Engineering Fundamentals',
              provider: 'edX',
              level: 'Intermediate',
            },
            { course_name: 'Mastering React Native', provider: 'Udemy', level: 'Advanced' },
          ],
        })

        toast.success('File processed successfully')
      } catch {
        toast.error('Error processing file')
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data)
      } else {
        toast.error('Error uploading file')
      }
      console.log(error)
    } finally {
      setUploading(false)
      setProcessing(false)
    }
  }

  return (
    <div className='mx-auto flex min-h-screen max-w-3xl flex-col px-16 py-10'>
      <h2 className='mb-3 text-center text-2xl font-bold'>UPLOAD RESUME</h2>

      <div>
        <div className='box'>
          <h2 className='header text-[18px] font-semibold'>Upload Your Resume Here.</h2>
          <form onSubmit={onSubmitHandler}>
            <div className='flex items-center justify-center'>
              <DropFileInput onFileChange={onFileChange} />
            </div>
            <div>
              {files.length > 0 && (
                <button
                  type='submit'
                  className='mt-4 w-full rounded bg-blue-500 px-4 py-2 text-white disabled:cursor-not-allowed disabled:bg-gray-300'
                  disabled={uploading || processing}
                >
                  {uploading ? 'Uploading...' : processing ? 'Processing...' : 'Analyse'}
                </button>
              )}
            </div>
            {uploading && (
              <div className='mt-4 flex items-center justify-between'>
                <div className='w-full rounded-full bg-gray-200'>
                  <div
                    className='h-2 rounded-full bg-blue-500'
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <div className='ml-4'>{progress}%</div>
              </div>
            )}
          </form>
        </div>

        {/* Download Sample Reports Links */}

        <div className='mt-4 rounded-lg bg-white px-5 py-6 shadow-md'>
          <h4 className='mb-2 font-bold'>Sample Resume</h4>
          <div>
            <ol className='ms-6 list-decimal'>
              {sampleReports.map((report, index) => (
                <li key={index}>
                  <a href={report.url} download className='text-blue-600'>
                    {report.name}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Reports */}

        {Object.keys(data).length > 0 && (
          <div className='mt-4 rounded-lg bg-white px-5 py-6 shadow-md' ref={resultRef}>
            <div>
              {/* Reports */}

              {Object.keys(data).length > 0 && (
                <div className='mt-4 rounded-lg bg-white px-5 py-6 shadow-md' ref={resultRef}>
                  <div>
                    <h2 className='mb-3 text-center text-2xl font-bold'>ANALYSIS RESULT</h2>
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                      {/* Display ATS Score */}
                      <div className='col-span-2 rounded-lg bg-gray-100 p-4'>
                        <h3 className='text-lg font-semibold'>ATS Score : </h3>
                        <p>{data.ATS_score}</p>
                      </div>

                      {/* Display Feedback */}
                      {data.feedback && (
                        <div className='col-span-2 rounded-lg bg-gray-100 p-4'>
                          <h3 className='text-lg font-semibold'>Feedback :</h3>
                          {Object.keys(data.feedback).map((key, index) => (
                            <div key={index}>
                              <h4 className='text-md my-2 font-medium'>{key.toUpperCase()} :</h4>
                              <p>{data.feedback[key]}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Display Course Recommendations */}
                      {data.course_recommendations && (
                        <div className='col-span-2 rounded-lg bg-gray-100 p-4'>
                          <h3 className='text-lg font-semibold'>Course Recommendations</h3>
                          {data.course_recommendations.map((course, index) => (
                            <div key={index} className='mb-2'>
                              <h4 className='text-md font-medium'>{course.course_name}</h4>
                              <p>Provider: {course.provider}</p>
                              <p>Level: {course.level}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ResumeAnalysis

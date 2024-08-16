import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Card,
  CardFooter,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
const QuizDetails = ({ questions, setQuestions }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [count, setCount] = useState('')
  const [quizId, setQuizId] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name === 'title') {
      setTitle(value)
    } else if (name === 'description') {
      setDescription(value)
    } else if (name == 'count') {
      setCount(value)
    }
  }
  let addQuestions = []
  let detailsId = 0
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Form submitted with:', { title, description, count })

    // fetching the questions from AI
    try {
      const response = await axios.post('http://localhost:3000/api/mcq/generate-ai', {
        text: title,
        noOfQuestions: count,
      })
      console.log(response.data)
      setQuestions(response.data.questions)
      addQuestions = response.data.questions
    } catch (error) {}
    // quiz creation
    try {
      const response = await axios.post('http://localhost:8080/api/gateway/create-quiz', {
        title: title,
        description: description,
      })
      console.log('Response:', response.data)
      setQuizId(response.data.id)
      detailsId = response.data.id
    } catch (error) {}
    // posting the questions
    try {
      addQuestions.map((val) =>
        axios.post('http://localhost:8080/api/gateway/post-question', {
          quizDetailsId: detailsId,
          question: val.question,
          options: val.options,
          answer: [val.correct_answer],
          difficulty: 'medium',
        }),
      )
      console.log('Questions saved to quiz')
    } catch (error) {
      console.error('Error saving questions:', error)
    }
  }
  return (
    <div>
      <Card className='flex flex-col rounded-lg px-5 py-5'>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>Test Title</label>
            <input
              type='text'
              name='title'
              value={title}
              onChange={handleInputChange}
              className='mt-1 block w-full rounded border border-gray-300 p-2'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>Description</label>
            <input
              type='text'
              name='description'
              value={description}
              onChange={handleInputChange}
              className='mt-1 block w-full rounded border border-gray-300 p-2'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>No of Questions</label>
            <input
              type='number'
              name='count'
              value={count}
              onChange={handleInputChange}
              className='mt-1 block w-full rounded border border-gray-300 p-2'
              required
            />
          </div>
          <div className='flex items-center justify-center'>
            <button type='button' className='mr-4 rounded border-2 border-black px-4 py-2'>
              Cancel
            </button>
            <button type='submit' className='rounded bg-black px-4 py-2 text-white'>
              Save
            </button>
          </div>
        </form>
      </Card>
    </div>
  )
}
const ShowAllQuestions = ({ questions }) => {
  return (
    <div>
      <Card className='flex h-[560px] flex-col overflow-hidden rounded-lg p-5'>
        <div className='scrollbar-hide h-full overflow-y-scroll'>
          {questions.map((qes, index) => (
            <div key={index} className='pt-2'>
              <p>
                {index + 1} : {qes.question}
              </p>
              <p className='mt-1'>Options : </p>
              <ul className='pl-6 pt-1'>
                {qes.options.map((option, optIndex) => (
                  <li key={optIndex}>
                    {optIndex + 1}). {option}
                  </li>
                ))}
              </ul>
              <p className='mb-3 mr-10 text-end'>Answer : {qes.correct_answer}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

function AiQuizGenerator() {
  const [questions, setQuestions] = useState([])
  const [message, setMessage] = useState('')
  useEffect(() => {
    if (questions.length > 0) {
      setMessage('Questions Generated Sucessfully...')
    } else {
      setMessage('')
    }
  }, [questions])
  return (
    <div className='container mx-auto mt-4'>
      <div>
        <p className='mb-3 text-3xl'>AI Generated Quiz</p>
        <p>
          Create a quiz using AI by providing the topic , description and the total number of
          questions .
        </p>
      </div>
      <div className='grid grid-cols-1 gap-4 pt-5 md:grid-cols-2'>
        <div className='col-span-1'>
          <ShowAllQuestions questions={questions} />
        </div>
        <div className='col-span-1'>
          <QuizDetails questions={questions} setQuestions={setQuestions} />
          <div className='pt-10'>
            <Card className='flex flex-col rounded-lg px-5 py-5'>
              <h1 className=''>Output : </h1>
              <p className='ml-[150px] pb-14 pt-10 text-green-600'>{message}</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AiQuizGenerator

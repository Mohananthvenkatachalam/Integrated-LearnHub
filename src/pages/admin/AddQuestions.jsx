import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import {
  Card,
  CardFooter,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const Add = ({ quizId, questions, setQuestions }) => {
  const [question, setQuestion] = useState('')
  const [options, setOptions] = useState(['', '', '', ''])
  const [answer, setAnswer] = useState([''])
  const [difficulty, setDifficulty] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name === 'question') {
      setQuestion(value)
    } else if (name.startsWith('option')) {
      const index = parseInt(name.split('-')[1])
      const newOptions = [...options]
      newOptions[index] = value
      setOptions(newOptions)
    } else if (name === 'answer') {
      setAnswer([value])
    } else if (name === 'difficulty') {
      setDifficulty(value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      quizDetailsId: quizId,
      question,
      options,
      answer,
      difficulty,
    }
    console.log('Submitting payload:', payload)

    try {
      const response = await axios.post('http://localhost:8080/api/gateway/post-question', payload)
      console.log('Response:', response.data)
      // Update the questions state
      setQuestions((prevQuestions) => [...prevQuestions, payload])
      setQuestion('')
      setOptions(['', '', '', ''])
      setAnswer([''])
      setDifficulty('')
    } catch (error) {
      console.error('Error response:', error.response)
      console.error('Error message:', error.message)
    }
  }

  const CancelQuestion = () => {
    setQuestion('')
    setOptions(['', '', '', ''])
    setAnswer([''])
    setDifficulty('')
  }

  return (
    <div>
      <Card className='flex flex-col rounded-lg px-5 py-3'>
        <h2 className='mb-3 text-lg font-semibold'>Add New Question</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label className='block text-sm font-medium text-gray-700'>Question</label>
            <input
              type='text'
              name='question'
              value={question}
              onChange={handleInputChange}
              className='mt-1 block w-full rounded border border-gray-300 p-2'
              required
            />
          </div>
          {options.map((option, index) => (
            <div key={index} className='mb-2'>
              <label className='block text-sm font-medium text-gray-700'>Option {index + 1}</label>
              <input
                type='text'
                name={`option-${index}`}
                value={option}
                onChange={handleInputChange}
                className='mt-1 block w-full rounded border border-gray-300 p-2'
                required
              />
            </div>
          ))}
          <div className='mb-2'>
            <label className='block text-sm font-medium text-gray-700'>Answer</label>
            <input
              type='text'
              name='answer'
              value={answer[0]}
              onChange={handleInputChange}
              className='mt-1 block w-full rounded border border-gray-300 p-2'
              required
            />
          </div>
          <div className='mb-2'>
            <label className='block text-sm font-medium text-gray-700'>Difficulty</label>
            <input
              type='text'
              name='difficulty'
              value={difficulty}
              onChange={handleInputChange}
              className='mt-1 block w-full rounded border border-gray-300 p-2'
              required
            />
          </div>
          <div className='flex items-center justify-center pt-3'>
            <button
              type='button'
              onClick={CancelQuestion}
              className='mr-4 rounded border-2 border-gray-300 px-4 py-2'
            >
              Cancel
            </button>
            <button type='submit' className='rounded bg-black px-4 py-2 text-white'>
              Add Question
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
      <Card className='flex h-[637px] flex-col overflow-hidden rounded-lg p-5'>
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
              <p className='mb-3 mr-10 text-end'>Answer : {qes.answer}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

function AddQuestions() {
  const location = useLocation()
  const query = new URLSearchParams(location.search)
  const quizId = query.get('quizId')
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/gateway/get/questions/${quizId}`,
        )
        console.log(response.data)
        setQuestions(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchQuestions()
  }, [quizId])

  return (
    <div className='container mx-auto mt-4'>
      <p className='mb-3 font-bold uppercase'>Add Questions for the Quiz</p>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <div className='col-span-1'>
          <ShowAllQuestions questions={questions} />
        </div>
        <div className='col-span-1'>
          <Add quizId={quizId} questions={questions} setQuestions={setQuestions} />
        </div>
      </div>
    </div>
  )
}

export default AddQuestions

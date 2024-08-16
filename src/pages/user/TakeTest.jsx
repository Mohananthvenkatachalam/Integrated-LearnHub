import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardFooter,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useLocation } from 'react-router-dom'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

const ShowScore = ({ score, onClose }) => {
  return (
    <AlertDialog open onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Final Score</AlertDialogTitle>
          <AlertDialogDescription>Your score is: {score}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
const TakeTest = () => {
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [score, setScore] = useState(0)
  const [eachChoosenIndex, setEachChoosenIndex] = useState([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const location = useLocation()
  const query = new URLSearchParams(location.search)
  const quizId = query.get('quizId')

  useEffect(() => {
    const fetchQuestions = async () => {
      // const token = 'your-jwt-token-here' // Replace this with the actual JWT token
      try {
        const response = await axios.get(
          `http://localhost:8080/api/gateway/get/questions/${quizId}`,
        )
        console.log(response.data)

        // problem in the response

        const data = response.data
        setQuestions(data)
        setEachChoosenIndex(Array(data.length).fill(null))
        console.log(questions)
      } catch (error) {
        console.log(error)
      }
    }
    fetchQuestions()
  }, [])
  // only one time fetch the question on render

  useEffect(() => {
    setSelectedOption(eachChoosenIndex[currentQuestionIndex])
  }, [currentQuestionIndex, eachChoosenIndex])

  const handleNext = () => {
    if (selectedOption !== null) {
      const newChoosenIndex = [...eachChoosenIndex]
      newChoosenIndex[currentQuestionIndex] = selectedOption
      setEachChoosenIndex(newChoosenIndex)
    }
    setSelectedOption(eachChoosenIndex[currentQuestionIndex])
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (selectedOption !== null) {
      const newChoosenIndex = [...eachChoosenIndex]
      newChoosenIndex[currentQuestionIndex] = selectedOption
      setEachChoosenIndex(newChoosenIndex)
    }
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const handleOptionChange = (index) => {
    setSelectedOption(index)
    if (index !== null) {
      const newChoosenIndex = [...eachChoosenIndex]
      newChoosenIndex[currentQuestionIndex] = index
      setEachChoosenIndex(newChoosenIndex)
    }
  }

  const handleSubmit = async () => {
    let cal = 0
    questions.forEach((question, index) => {
      if (question.options[eachChoosenIndex[index]] === question.answer[0]) {
        cal += 1
      }
    })
    setScore(cal)
    setIsDialogOpen(true)
    try {
      const response = await axios.post('http://localhost:8080/api/gateway/post-score', {
        quizDetailsId: 3,
        score: cal,
        totalQuestions: questions.length,
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleDialogClose = () => {
    setIsDialogOpen(false)
  }

  return (
    <div className='px-9 py-6'>
      <p className='py-5'>Complete the test to View your Learning results ...</p>
      {questions.length > 0 && (
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          <div>
            <Card className='flex min-h-[500px] flex-col rounded-lg p-5'>
              <CardContent className='text-lg font-bold'>
                Question No : {currentQuestionIndex + 1} / {questions.length}
              </CardContent>
              <CardContent>
                <h2
                  className='p-5 text-lg font-semibold'
                  dangerouslySetInnerHTML={{ __html: questions[currentQuestionIndex].question }}
                />
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className='flex min-h-[500px] flex-col rounded-lg p-5'>
              <CardContent>
                <h1 className='text-lg font-bold'>Options :</h1>
              </CardContent>
              <CardContent>
                {/* mar by index */}
                {questions[currentQuestionIndex].options.map((option, index) => (
                  <div key={index} className='my-2'>
                    <label className='inline-flex items-center'>
                      <input
                        type='radio'
                        name='option'
                        value={index}
                        checked={selectedOption == index}
                        onClick={() => handleOptionChange(index)}
                        className='form-radio text-primary'
                      />
                      <span className='ml-2' dangerouslySetInnerHTML={{ __html: option }} />
                    </label>
                  </div>
                ))}
              </CardContent>
              <CardFooter className='mt-auto justify-end'>
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex == 0}
                  className='mr-4 rounded bg-gray-300 px-4 py-2 disabled:opacity-50'
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentQuestionIndex == questions.length - 1}
                  className='rounded bg-primary px-4 py-2 text-secondary disabled:opacity-50'
                >
                  Next
                </button>
              </CardFooter>
            </Card>
            <div className='mt-4 flex w-full justify-start'>
              <Button onClick={handleSubmit}>Submit Test</Button>
            </div>
          </div>
        </div>
      )}
      {isDialogOpen && <ShowScore score={score} onClose={handleDialogClose} />}
    </div>
  )
}

export default TakeTest

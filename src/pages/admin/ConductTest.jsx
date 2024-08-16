import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PlusIcon } from 'lucide-react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const ShowForm = ({ setDisplayForm }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name === 'title') {
      setTitle(value)
    } else if (name === 'description') {
      setDescription(value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Form submitted with:', { title, description })

    try {
      const response = await axios.post('http://localhost:8080/api/gateway/create-quiz', {
        title: title,
        description: description,
      })
      console.log('Response:', response.data)
      setDisplayForm(false)
    } catch (error) {}
  }

  return (
    <div>
      <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'>
        <div className='w-5/12 rounded-lg bg-white p-6 shadow-lg'>
          <h2 className='mb-4 text-lg font-semibold'>Add New Test</h2>
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
            <div className='flex items-center justify-center'>
              <button
                type='button'
                onClick={() => setDisplayForm(false)}
                className='mr-4 rounded border-2 border-black px-4 py-2'
              >
                Cancel
              </button>
              <button type='submit' className='rounded bg-black px-4 py-2 text-white'>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
function ConductTest() {
  const [search, setSearch] = useState('')
  const [displayForm, setDisplayForm] = useState(false)
  const [selectedQuizId, setSelectedQuizId] = useState(null)
  const [quizDetails, setQuizDetails] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/gateway/get-all-quiz')
        console.log(response.data)
        setQuizDetails(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchQuestions()
  }, [displayForm])

  const handleAddQuestion = (quizId) => {
    navigate(`/admin/add-questions?quizId=${quizId}`)
  }

  return (
    <div className='px-[30px] py-[40px]'>
      <p className='mb-2 text-[20px] font-semibold'>MCQ & Coding Test Builder</p>
      <p>Create The MCQ & Coding test for your students to test their skills</p>
      <div className='mt-5'>
        <div className='mb-3 flex items-center justify-between gap-2'>
          <Input
            type='text'
            placeholder='Search Test...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='w-[300px]'
          />
          <div className='flex gap-4'>
            <Link to='/admin/ai-generated-quiz'>
              <Button className='bg-red-500'>
                <PlusIcon className='mr-1 size-4' />
                Create AI Generated Quiz
              </Button>
            </Link>
            <Button onClick={() => setDisplayForm(true)}>
              <PlusIcon className='mr-1 size-4' />
              Create Test
            </Button>
          </div>
        </div>
      </div>
      {displayForm && <ShowForm setDisplayForm={setDisplayForm} />}
      <div>
        <h1 className='mb-[20px] text-[20px] font-semibold'>List of Tests :-</h1>
        <div className='overflow-x-auto'>
          <table className='min-w-full table-auto divide-y divide-gray-200 border-gray-300'>
            <thead className='bg-gray-50'>
              <tr>
                <th className='px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>
                  Test ID
                </th>
                <th className='px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>
                  Title
                </th>
                <th className='px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>
                  Admin ID
                </th>
                <th className='px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>
                  Total Attended
                </th>
                <th className='px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>
                  Add Questions
                </th>
                <th className='px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>
                  Result Analysis
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200 bg-white'>
              {quizDetails.map((item) => (
                <tr key={item.id}>
                  <td className='max-w-xs whitespace-nowrap px-4 py-2'>{item.id}</td>
                  <td className='max-w-xs whitespace-nowrap px-4 py-2'>{item.title}</td>
                  <td className='max-w-xs whitespace-nowrap px-4 py-2'>{item.admin_id}</td>
                  <td className='max-w-xs whitespace-nowrap px-4 py-2'>
                    {item.total_attended_count}
                  </td>
                  <td className='max-w-xs whitespace-nowrap px-4'>
                    <Button className='px-2 text-[12px]' onClick={() => handleAddQuestion(item.id)}>
                      Add Questions
                    </Button>
                  </td>
                  <td className='max-w-xs whitespace-nowrap px-4 py-2'>
                    <Button className='bg-blue-500 px-3 text-[12px]'>View Results</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ConductTest

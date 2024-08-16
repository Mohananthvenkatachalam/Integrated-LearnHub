import axios from 'axios'
import React from 'react'

import { ArrowBigLeft, ArrowBigRight, PlusIcon, PlusSquareIcon } from 'lucide-react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import DataTable from '@/components/common/DataTable'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { CaretSortIcon, DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Checkbox } from '@/components/ui/checkbox'
import { useNavigate } from 'react-router-dom'

const initialData = [
  {
    courseId: 1,
    url: 'https://example.com/web-development',
    title: 'Web Development',
    brand: 'AspireCoders',
    type: 'Online',
    image: 'https://example.com/images/web-development.jpg',
    category: 'Development',
    certificateIsAvailable: true,
    description:
      'Learn the basics of web developmentdsadasdasdasdsadasdsdjsdjsjdsjdjsdjsjdjsdjsjdsjdjsdjsjdsjdjsjdsjdjsdjsadasdkaskfndakfndkfndsfndsjkfnsdjkfndsjbfdsjfbdjfbsdjfbjfdbjds.',
    duration: '6 weeks',
    level: 'Beginner',
    price: 499,
    rating: 4.5,
    timestamp: '2023-10-01T10:00:00Z',
    enrolled: 145,
  },
  {
    courseId: 2,
    url: 'https://example.com/backend-development',
    title: 'Backend Development',
    brand: 'AspireCoders',
    type: 'Online',
    image: 'https://example.com/images/backend-development.jpg',
    category: 'Development',
    certificateIsAvailable: true,
    description: 'Master backend development with Node.js.',
    duration: '8 weeks',
    level: 'Intermediate',
    price: 399,
    rating: 4.7,
    timestamp: '2023-10-01T10:00:00Z',
    enrolled: 267,
  },
  {
    courseId: 3,
    url: 'https://example.com/fullstack-development',
    title: 'Full stack Development',
    brand: 'AspireCoders',
    type: 'Online',
    image: 'https://example.com/images/fullstack-development.jpg',
    category: 'Development',
    certificateIsAvailable: true,
    description: 'Become a full stack developer.',
    duration: '12 weeks',
    level: 'Advanced',
    price: 1999,
    rating: 4.8,
    timestamp: '2023-10-01T10:00:00Z',
    enrolled: 300,
  },
  {
    courseId: 4,
    url: 'https://example.com/data-science',
    title: 'Data Science',
    brand: 'AspireCoders',
    type: 'Online',
    image: 'https://example.com/images/data-science.jpg',
    category: 'Data Science',
    certificateIsAvailable: true,
    description: 'Learn data science from scratch.',
    duration: '10 weeks',
    level: 'Beginner',
    price: 1299,
    rating: 4.6,
    timestamp: '2023-10-01T10:00:00Z',
    enrolled: 220,
  },
  {
    courseId: 5,
    url: 'https://example.com/machine-learning',
    title: 'Machine Learning',
    brand: 'AspireCoders',
    type: 'Online',
    image: 'https://example.com/images/machine-learning.jpg',
    category: 'Data Science',
    certificateIsAvailable: true,
    description: 'Master machine learning techniques.',
    duration: '14 weeks',
    level: 'Advanced',
    price: 1599,
    rating: 4.7,
    timestamp: '2023-10-01T10:00:00Z',
    enrolled: 180,
  },
  {
    courseId: 6,
    url: 'https://example.com/cybersecurity',
    title: 'Cybersecurity',
    brand: 'AspireCoders',
    type: 'Online',
    image: 'https://example.com/images/cybersecurity.jpg',
    category: 'Security',
    certificateIsAvailable: true,
    description: 'Learn the fundamentals of cybersecurity.',
    duration: '8 weeks',
    level: 'Intermediate',
    price: 999,
    rating: 4.5,
    timestamp: '2023-10-01T10:00:00Z',
    enrolled: 150,
  },
  {
    courseId: 7,
    url: 'https://example.com/cloud-computing',
    title: 'Cloud Computing',
    brand: 'AspireCoders',
    type: 'Online',
    image: 'https://example.com/images/cloud-computing.jpg',
    category: 'Cloud',
    certificateIsAvailable: true,
    description: 'Master cloud computing with AWS.',
    duration: '10 weeks',
    level: 'Advanced',
    price: 1799,
    rating: 4.8,
    timestamp: '2023-10-01T10:00:00Z',
    enrolled: 275,
  },
  {
    courseId: 8,
    url: 'https://example.com/devops',
    title: 'DevOps',
    brand: 'AspireCoders',
    type: 'Online',
    image: 'https://example.com/images/devops.jpg',
    category: 'Development',
    certificateIsAvailable: true,
    description: 'Learn DevOps practices and tools.',
    duration: '8 weeks',
    level: 'Intermediate',
    price: 1399,
    rating: 4.6,
    timestamp: '2023-10-01T10:00:00Z',
    enrolled: 190,
  },
  {
    courseId: 9,
    url: 'https://example.com/artificial-intelligence',
    title: 'Artificial Intelligence',
    brand: 'AspireCoders',
    type: 'Online',
    image: 'https://example.com/images/artificial-intelligence.jpg',
    category: 'AI',
    certificateIsAvailable: true,
    description: 'Learn the basics of AI.',
    duration: '12 weeks',
    level: 'Advanced',
    price: 1899,
    rating: 4.7,
    timestamp: '2023-10-01T10:00:00Z',
    enrolled: 210,
  },
  {
    courseId: 10,
    url: 'https://example.com/blockchain-development',
    title: 'Blockchain Development',
    brand: 'AspireCoders',
    type: 'Online',
    image: 'https://example.com/images/blockchain-development.jpg',
    category: 'Blockchain',
    certificateIsAvailable: true,
    description: 'Master blockchain development.',
    duration: '10 weeks',
    level: 'Advanced',
    price: 1499,
    rating: 4.8,
    timestamp: '2023-10-01T10:00:00Z',
    enrolled: 160,
  },
]

export const columns = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'courseId',
    header: () => <div className='px-4 py-2'>Course ID</div>,
    cell: ({ row }) => <div className='px-10'>{row.getValue('courseId')}</div>,
  },
  {
    accessorKey: 'title',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className='px-10'
        >
          Title
          <CaretSortIcon className='ml-2 h-4 w-4' />
        </Button>
      )
    },
    cell: ({ row }) => <div>{row.getValue('title')}</div>,
  },
  {
    accessorKey: 'description',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Description
          <CaretSortIcon className='ml-2 h-4 w-4' />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div
        className='w-96 overflow-hidden text-ellipsis whitespace-nowrap'
        title={row.getValue('description')}
      >
        {row.getValue('description')}
      </div>
    ),
  },
  {
    accessorKey: 'rating',
    header: () => <div className=''>Rating</div>,
    cell: ({ row }) => <div>{row.getValue('rating')}</div>,
  },
  {
    accessorKey: 'level',
    header: () => <div className=''>Level</div>,
    cell: ({ row }) => <div>{row.getValue('level')}</div>,
  },
  {
    accessorKey: 'price',
    header: () => <div className='text-right'>Price</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('price'))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR',
      }).format(amount)

      return <div className='text-right font-medium'>{formatted}</div>
    },
  },
  {
    accessorKey: 'enrolled',
    header: () => <div className='text-right'>Enrolled</div>,
    cell: ({ row }) => <div className='text-right font-medium'>{row.getValue('enrolled')}</div>,
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <DotsHorizontalIcon className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>View Enrolled students</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

const AdminCoursePage = () => {
  const [data, setData] = React.useState(initialData)
  const [search, setSearch] = React.useState('')
  const [currentPage, setCurrentPage] = React.useState(1)
  const navigate = useNavigate()

  const itemsPerPage = 8

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  )

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewCourse({ ...newCourse, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newCourse.name && newCourse.price && newCourse.enrolled) {
      const newCourseId = data.length ? data[data.length - 1].courseId + 1 : 1
      setData([
        ...data,
        {
          ...newCourse,
          courseId: newCourseId,
          price: parseFloat(newCourse.price),
          enrolled: parseInt(newCourse.enrolled),
        },
      ])
      axios.post('http://localhost:8080/api/courses', data)
      toast.success('Course added successfully')
      setShowForm(false)
      setNewCourse({ courseId: '', name: '', price: '', enrolled: '' })
    }
  }

  return (
    <div className='flex flex-col p-8'>
      <div className='flex items-center justify-between'>
        <div>
          <h3 className='text-2xl font-semibold'>Courses</h3>
          <p className='text-muted-foreground'>Manage all your courses available on the platform</p>
        </div>

        <Button onClick={() => navigate('add')} className='flex items-center space-x-2'>
          <PlusIcon className='size-4' />
          Add Course
        </Button>
      </div>

      <DataTable data={data} columns={columns} />
    </div>
  )
}

export default AdminCoursePage

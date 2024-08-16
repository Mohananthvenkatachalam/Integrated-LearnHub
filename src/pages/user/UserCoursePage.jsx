import { Button } from '@/components/ui/button'
import { StarFilledIcon } from '@radix-ui/react-icons'
import axios from 'axios'
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export default function Courses() {
  const [items, setItems] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('title')
  const itemsPerPage = 9

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/courses?page=${currentPage - 1}&sortBy=${sort}&search=${search}`,
        )
        setItems(res.data.content)
        setTotalPages(res.data.totalPages)
        console.log(res.data)
      } catch (error) {
        console.error('Error fetching courses data:', error)
      }
    }
    fetchData()
  }, [currentPage, sort, search])

  const handleSort = async (e) => {
    setSort(e.target.value)
    setCurrentPage(1)
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    setSearch(form.get('search'))
  }

  const handlePagination = async (type) => {
    if (type === 'next') {
      setCurrentPage((prev) => prev + 1)
    } else {
      setCurrentPage((prev) => prev - 1)
    }
  }

  const getProfileImage = (thumbnail) => {
    const base64 = thumbnail
    const image = `data:image/png;base64,${base64}`
    return image
  }

  return (
    <div className='max-w-screen-2xl py-8 container relative w-full flex-row items-center justify-center'>
      <h1 className='py-10 text-center text-5xl font-extrabold'>Discover Our Curated Courses</h1>
      <div className='w-full px-4'>
        <h3 className='mx-auto max-w-4xl text-center'>
          Explore a diverse range of courses designed to help you achieve your learning goals. From
          tech to creative skills, our curated selection covers a wide array of topics, featuring
          top-notch content and expert instructors
        </h3>
        <div className='mx-auto my-10 flex h-12 max-w-lg overflow-hidden rounded-md border-2 ps-5 font-[sans-serif] shadow-lg focus-within:border-black'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 192.904 192.904'
            width='16px'
            className='mr-3 rotate-90 fill-gray-600'
          >
            <path d='m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z'></path>
          </svg>
          <form onSubmit={handleSearch} className='flex w-full items-center justify-center'>
            <input
              type='text'
              placeholder='Search Something...'
              name='search'
              className='w-full bg-transparent font-sans text-lg text-gray-600 outline-none'
            />
            <Button variant={'secondary'} type='submit'>
              Search
            </Button>
          </form>
        </div>
      </div>
      <form className='m-10 w-40'>
        <select
          onChange={handleSort}
          id='sortOptions'
          className='focus:border-black-500 focus:ring-black-500 dark:focus:border-black-500 dark:focus:ring-black-500 ml-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
        >
          <option selected>Sort By</option>
          <option value='trending'>Trending</option>
          <option value='popular'>Popular</option>
          <option value='newest'>Newest</option>
          <option value='price-high'>Price High</option>
          <option value='price-low'>Price Low</option>
          <option value='free'>Free</option>
        </select>
      </form>
      <section className='mx-auto mb-5 mt-10 grid w-fit grid-cols-1 justify-center justify-items-center gap-x-2 gap-y-20 md:grid-cols-2 lg:grid-cols-3'>
        {items.map((item, index) => (
          <div
            key={index + 'courseid-' + item.courseId}
            className='w-9/12 rounded-xl bg-secondary shadow-md duration-500 hover:scale-105 hover:shadow-xl'
          >
            <div className=''>
              <img
                src={item.thumbnail === null ? item.image : getProfileImage(item.thumbnail)}
                alt='Product'
                className='w-full rounded-t-xl object-contain'
              />
              <div className='w-full px-4'>
                <span className='mr-3 text-xs uppercase text-gray-400'>{item.brand}</span>
                <p
                  className='block truncate text-lg font-bold capitalize text-black'
                  title={item.title}
                >
                  {item.title}
                </p>
                <span className='mr-3 text-xs text-gray-400'>{item.duration}</span>
                <div className='flex items-center'>
                  <span className='mr-3 text-xs uppercase text-gray-400'>{item.level}</span>
                </div>
              </div>
              <div>
                <div className='ml-5 flex items-center'>
                  <p className='mr-3 flex text-xs text-black'>
                    {item.rating}
                    <StarFilledIcon className='text-yellow-500' />
                  </p>
                  <p className='my-2 ml-2 cursor-auto text-lg font-semibold text-black'>
                    {item.price === '0' ? 'Free' : `₹${item.price}`}
                  </p>
                </div>
                <button
                  className='w-full rounded-md bg-black p-2 text-white'
                  onClick={() => (window.location.href = item.url)}
                >
                  Enroll
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
      <div className='m-10 flex items-center justify-center'>
        {items.length === 0 ? 'No courses found' : <></>}
        <>
          <button
            disabled={currentPage == 1}
            onClick={() => handlePagination('prev')}
            className='px-4 py-2'
          >
            <ArrowBigLeft />
          </button>
          <span>
            {currentPage}/{totalPages}
          </span>
          <button
            onClick={() => handlePagination('next')}
            className='px-4 py-2'
            disabled={currentPage === totalPages}
          >
            <ArrowBigRight />
          </button>
        </>
      </div>
    </div>
  )
}

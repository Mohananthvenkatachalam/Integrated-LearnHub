import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import {
  ArrowBigLeft,
  ArrowBigRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Flag,
  Globe,
  Tag,
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function HackathonPage() {
  const [filterCounter, setFilterCounter] = useState(0)
  const [search, setSearch] = useState('')
  const [showAll, setShowAll] = useState(false)
  const interestSize = 4
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const [currentPage, setCurrentPage] = useState(1)
  const [currentItems, setCurrentItems] = useState([])

  var interest = [
    'Beginner Friendly',
    'Social Good',
    'Machine Learning/AI',
    'Open Ended',
    'Education',
    'Web',
    'Blockchain',
    'Design',
    'Productivity',
    'Health',
    'Communication',
    'AR/VR',
    'Gaming',
    'COVID-19',
    'Fintech',
    'IoT',
    'Low/No Code',
    'Mobile',
    'DevOps',
    'Cybersecurity',
    'Lifehacks',
    'Enterprise',
    'Databases',
    'E-commerce/Retail',
    'Voice skills',
    'Music/Art',
    'Robotic Process Automation',
    'Quantum',
  ]
  const interestLength = interest.length
  interest = interest.slice(0, showAll ? interest.length : interestSize)
  const [activeSort, setActiveSort] = useState('Most relevant')
  const [page, setPage] = useState(1)

  const handleSortClick = (sortType) => {
    setActiveSort(sortType)
  }

  const [items, setItems] = useState([])
  const [totPage, setTotPage] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get('http://localhost:8080/hackathons?page=' + page)
        .then((res) => {
          console.log(res.data)
          setItems(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    fetchData()
  }, [page])

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get('http://localhost:8080/hackathons?page=1')
        .then((res) => {
          setItems(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    fetchData()
  }, [])
  const navigate = useNavigate()
  const handleClick = (item) => {
    window.open(item.submission_gallery_url, '_blank')
  }

  return (
    <div className='max-w-screen-2xl py-8 container relative w-full flex-row items-center justify-center'>
      <h1 className='py-10 text-center text-5xl font-extrabold'>
        Join the world's best online and in-person hackathons
      </h1>
      <div className='w-full px-4'>
        <h3 className='mx-auto max-w-4xl text-center'>
          Participate in diverse hackathons designed to spark your creativity and innovation. From
          coding to problem-solving, our events cover a wide range of challenges, featuring expert
          mentors and exciting prizes.
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
          <input
            type='text'
            placeholder='Search by Hackathon title or keyword'
            className='w-full bg-transparent font-sans text-sm text-gray-600 outline-none'
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <Button variant={'ghost'} className='h-full rounded-none'>
            Search
          </Button>
        </div>
      </div>
      <div className='mt-16 flex'>
        <div className='w-1/4 ps-5'>
          <div className='flex items-center gap-1'>
            <Button variant={'link'} className={filterCounter === 0 ? 'disabled' : ''}>
              Clear Filters
            </Button>
            <p>{filterCounter}</p>
          </div>
          <div className='my-3'>
            <h2>Location</h2>
            <div className='my-3 flex items-center gap-5'>
              <Checkbox id='online' onClick={() => setFilterCounter(filterCounter + 1)} />
              <Label htmlFor='online'>Online</Label>
            </div>
            <div className='flex items-center gap-5'>
              <Checkbox id='In-Person' onClick={() => setFilterCounter(filterCounter + 1)} />
              <Label htmlFor='online'>In-Person</Label>
            </div>
          </div>
          <div className='mt-10'>
            <h2>Status</h2>
            <div className='mt-3 flex items-center gap-5'>
              <Checkbox id='upcoming' onClick={() => setFilterCounter(filterCounter + 1)} />
              <Label htmlFor='upcoming'>Upcoming</Label>
            </div>
            <div className='mt-3 flex items-center gap-5'>
              <Checkbox id='open' onClick={() => setFilterCounter(filterCounter + 1)} />
              <Label htmlFor='open'>Open</Label>
            </div>
            <div className='mt-3 flex items-center gap-5'>
              <Checkbox id='ended' onClick={() => setFilterCounter(filterCounter + 1)} />
              <Label htmlFor='ended'>Ended</Label>
            </div>
          </div>
          <div className='mt-10'>
            <h2>Length</h2>
            <div className='mt-3 flex items-center gap-5'>
              <Checkbox id='days' onClick={() => setFilterCounter(filterCounter + 1)} />
              <Label htmlFor='days'>1-6 days</Label>
            </div>
            <div className='mt-3 flex items-center gap-5'>
              <Checkbox id='week' onClick={() => setFilterCounter(filterCounter + 1)} />
              <Label htmlFor='week'>1-4 Weeks</Label>
            </div>
            <div className='mt-3 flex items-center gap-5'>
              <Checkbox id='month' onClick={() => setFilterCounter(filterCounter + 1)} />
              <Label htmlFor='month'>1+ Month</Label>
            </div>
          </div>
          <div className='mt-10'>
            <h2>Interest Tags</h2>
            {interest.map((item, index) => (
              <div className='mt-3 flex items-center gap-5'>
                <Checkbox id={item} onClick={() => setFilterCounter(filterCounter + 1)} />
                <Label htmlFor={item}>{item}</Label>
              </div>
            ))}
            <Button variant={'link'} className='mt-3' onClick={() => setShowAll((prev) => !prev)}>
              {showAll ? 'Show Less' : `Show More (${interestLength - interestSize})`}
            </Button>
          </div>
        </div>
        <div className='w-9/12'>
          <div className='flex items-center justify-end gap-5'>
            <h1>Sort:</h1>
            <div>
              <Button
                variant={'link'}
                className={activeSort === 'Most relevant' ? 'underline' : ''}
                onClick={() => handleSortClick('Most relevant')}
              >
                Most relevant
              </Button>
              <Button
                variant={'link'}
                className={activeSort === 'Submission date' ? 'underline' : ''}
                onClick={() => handleSortClick('Submission date')}
              >
                Submission date
              </Button>
              <Button
                variant={'link'}
                className={activeSort === 'Recently Added' ? 'underline' : ''}
                onClick={() => handleSortClick('Recently Added')}
              >
                Recently Added
              </Button>
              <Button
                variant={'link'}
                className={activeSort === 'Price Amount' ? 'underline' : ''}
                onClick={() => handleSortClick('Price Amount')}
              >
                Price Amount
              </Button>
            </div>
          </div>
          <div>
            {items.map((item, index) => (
              <Link onClick={() => handleClick(item)} key={index}>
                <div className='mt-5 flex flex-col items-center rounded-xl border p-4 shadow md:flex-row md:items-start'>
                  <div className='mb-6 mr-6 w-full md:mb-0 md:w-1/3'>
                    <img src={item.thumbnail_url} alt={item.title} className='rounded-lg' />
                  </div>
                  <div className='w-full'>
                    <h2 className='mb-2 text-2xl font-bold'>{item.title}</h2>
                    <div className='mb-4 flex items-center gap-3'>
                      <p className='mr-2 rounded-md bg-gray-200 px-3 py-1 text-sm font-normal'>
                        {item.time_left_to_submission}
                      </p>
                      <div className='flex items-center justify-center gap-1'>
                        <Globe className='size-5' />
                        <p className='text-gray-700'>{item.displayed_location.location}</p>
                      </div>
                    </div>
                    <div className='flex flex-col md:flex-row'>
                      <div className='mb-4 flex items-center justify-center gap-2 md:mr-6'>
                        {/* <span className='mb-1 text-sm text-gray-800'>{item.prize_amount}</span> */}
                        <span
                          className='text-sm text-gray-800'
                          dangerouslySetInnerHTML={{
                            __html: item.prize_amount,
                          }}
                        ></span>
                        <span>in prices</span>
                      </div>
                      <div>
                        <p className='mt-1 text-sm text-gray-800'>
                          {item.registrations_count} participants
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='w-full md:w-2/5'>
                    <div className='mb-4 flex items-center gap-2'>
                      <Flag className='size-5' />
                      <button className='rounded-md border border-black px-1 font-mono'>
                        {item.organization_name}
                      </button>
                    </div>
                    <div className='mb-4 flex items-center gap-2'>
                      <Calendar className='size-5' />
                      <p className='text-sm text-gray-700'>{item.submission_period_dates}</p>
                    </div>
                    <div className='mt-5 flex gap-2'>
                      <Tag className='size-5' />
                      <div>
                        {item.themes &&
                          item.themes.map((tag, tagIndex) => (
                            <p
                              key={tagIndex}
                              className='mb-1 rounded-md border bg-gray-200 p-1 text-sm'
                            >
                              {tag.name}
                            </p>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className='className="absolute shadow-md" bottom-0 left-0 right-0 flex justify-end gap-2 bg-white py-4'>
            {/* {currentItems.length === 0 ? (
          'No courses found'
        ) : ( */}
            <>
              <Button
                size='icon'
                onClick={() => setPage((prev) => prev - 1)}
                disabled={page === 1}
                // className='px-4 py-2'
              >
                <ChevronLeft />
                {/* Previous */}
              </Button>
              <Button
                size='icon'
                onClick={() => setPage((prev) => prev + 1)}
                // disabled={currentPage === totalPages}
                // className='px-4 py-2'
              >
                {/* <ArrowBigRight /> */}
                {/* Next */}
                <ChevronRight />
              </Button>
            </>
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  )
}

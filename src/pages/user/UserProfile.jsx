import React, { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  User,
  Cake,
  Twitter,
  Linkedin,
  Camera,
  Calendar,
  Home,
  University,
  Github,
  Eye,
  Check,
  Handshake,
  MessageCircle,
  Star,
  ClipboardList,
} from 'lucide-react'
import {
  Card,
  CardFooter,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar'
import { Badge } from '@/components/ui/badge'
import CalendarHeat from '@/components/CalenderHeatMap'
import { useAuth } from '@/contexts/AuthContext'

function UserProfile() {
  const [showAll, setShowAll] = useState(false)
  const { user } = useAuth()

  const items = [
    { language: 'Java', solved: 100 },
    { language: 'React', solved: 80 },
    { language: 'Javascript', solved: 27 },
    { language: 'Python', solved: 50 },
    { language: 'MangoDB', solved: 30 },
  ]

  const submissions = [
    { name: 'Introduction to Programming', date: '2 days ago' },
    { name: 'Data Structures and Algorithms', date: '7 days ago' },
    { name: 'Web Development Fundamentals', date: '14 days ago' },
    { name: 'Machine Learning Basics', date: '21 days ago' },
    { name: 'Advanced JavaScript', date: '28 days ago' },
    { name: 'Database Management Systems', date: '35 days ago' },
    { name: 'Network Security', date: '42 days ago' },
    { name: 'Cloud Computing', date: '49 days ago' },
    { name: 'Software Engineering Principles', date: '56 days ago' },
    { name: 'Artificial Intelligence', date: '63 days ago' },
    { name: 'Human-Computer Interaction', date: '70 days ago' },
    { name: 'Operating Systems', date: '77 days ago' },
    { name: 'Computer Networks', date: '84 days ago' },
    { name: 'Discrete Mathematics', date: '91 days ago' },
  ]

  const totEc = 814
  const totMed = 1700
  const totHard = 723
  const ec = 165
  const med = 111
  const hard = 7
  const totalProblems = totEc + totMed + totHard
  const solvedProblems = ec + med + hard
  const overallProgress = (solvedProblems / totalProblems) * 100

  const toggleShowAll = () => {
    setShowAll(!showAll)
  }

  const submissionPageSize = 7
  const submissionsToShow = submissions.slice(0, submissionPageSize)

  const itemsToShow = showAll ? items : items.slice(0, 3)
  return (
    <div>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
        {/* Profile Image and Basic Info */}
        <Card className='col-span-1 flex gap-5 rounded-lg p-10'>
          <div className='w-full'>
            <div className='flex'>
              <img
                src='https://cdn.pixabay.com/photo/2024/04/16/17/13/ai-generated-8700519_1280.jpg'
                alt='Profile'
                className='size-28 rounded-lg'
              />
              <div className='ms-5 mt-5'>
                <h2 className='text-lg font-bold'>{user.fullname}</h2>
                <p className='text-sm text-gray-600'>{user.email.split('@')[0]}</p>
                <div className='flex text-sm text-gray-600'>
                  <p className='text-lg font-bold'>Rank : </p>
                  <p className='text-lg font-semibold'>29</p>
                </div>
              </div>
            </div>
            <p className='mt-4 text-lg'>
              ~ A passionate programmer who Likes to do Full stack Projects
            </p>
            <Button variant='default' className='mt-4 w-full'>
              Edit Profile
            </Button>
            <div className='flex-col border-b border-b-gray-500 pb-7'>
              <div className='flex items-center gap-3 pt-5'>
                <MapPin className='text-gray-600' />
                <span>India</span>
              </div>
              <div className='flex items-center gap-3 pt-5'>
                <University className='text-gray-600' />
                <p className='max-w-full overflow-hidden text-ellipsis'>
                  Sri Krishna College Of Engineering and Technology
                </p>
              </div>
              <div className='flex items-center gap-3 pt-5'>
                <Linkedin className='text-gray-600' />
                <a href='https://linkedin.com/in/johndoe' target='_blank' rel='noopener noreferrer'>
                  linkedin.com/in/priyanshu_T
                </a>
              </div>
              <div className='flex items-center gap-3 pt-5'>
                <Globe className='text-gray-600' />
                <a href='https://google.com' target='_blank' rel='noopener noreferrer'>
                  priyanshuofficial.github.io
                </a>
              </div>
              <div className='flex items-center gap-3 pt-5'>
                <Github className='text-gray-600' />
                <a href='https://google.com' target='_blank' rel='noopener noreferrer'>
                  priyanshu.github.io
                </a>
              </div>
            </div>
            <div className='mt-5 border-b border-b-gray-500 pb-7'>
              <h2 className='text-xl font-semibold'>Community Stats</h2>
              <div className='flex items-center gap-3 pt-5'>
                <Eye className='text-blue-600' />
                <div>
                  <p>Course Enrolled : 35</p>
                  <p>Last Week : 2</p>
                </div>
              </div>
              <div className='flex items-center gap-3 pt-5'>
                <Check className='text-cyan-500' />
                <div>
                  <p>Test Attended : 10</p>
                  <p>Last Week : 1</p>
                </div>
              </div>
              <div className='flex items-center gap-3 pt-5'>
                <MessageCircle className='text-green-500' />
                <div>
                  <p>Projects Submitted : 7</p>
                  <p>Last Week : 0</p>
                </div>
              </div>
              <div className='flex items-center gap-3 pt-5'>
                <Star className='text-yellow-500' />
                <div>
                  <p>Total Active Days : 245</p>
                  <p>Last Week : 5</p>
                </div>
              </div>
            </div>
            <div className='mt-5'>
              <h2 className='pb-3 text-xl font-semibold'>Course Completed</h2>
              <div className='w-full'>
                {itemsToShow.map((item, index) => (
                  <div key={index} className='flex items-center justify-between gap-3 pt-2'>
                    <p className='rounded-2xl bg-slate-400 p-2'>{item.language}</p>
                    <div className='flex gap-2'>
                      <p className='font-bold'>{item.solved} %</p>
                    </div>
                  </div>
                ))}
                <button onClick={toggleShowAll} className='mx-auto mt-4'>
                  {showAll ? 'Show Less' : 'Show More'}
                </button>
              </div>
            </div>
          </div>
        </Card>

        {/* Profile Details */}
        <div className='col-span-2 grid h-[300px] grid-cols-1 gap-5 md:grid-cols-2'>
          <Card className='col-span-1 rounded-md p-3'>
            {/* First Column */}
            <div className='flex items-center justify-center'>
              <div className='w-1/2 md:w-1/2'>
                <CircularProgressbarWithChildren
                  value={overallProgress}
                  styles={buildStyles({
                    strokeLinecap: 'butt',
                    textColor: '#000',
                    pathColor: 'blue',
                    trailColor: '#d6d6d6',
                    pathTransitionDuration: 0.5,
                    pathTransition: 'none',
                  })}
                >
                  <p className='text-2xl'>{`${solvedProblems} / ${totalProblems}`}</p>
                  <p className='text-lg'>{`${overallProgress.toFixed(1)}%`}</p>
                </CircularProgressbarWithChildren>
              </div>
              <div className='ms-14'>
                <div className='mb-3 rounded-md border p-3'>
                  <p className='text-md font-semibold text-green-400'>Easy</p>
                  <p className='text-md font-semibold'>
                    {ec}/{totEc}
                  </p>
                </div>
                <div className='mb-3 rounded-md border p-3'>
                  <p className='text-md font-semibold text-yellow-300'>Medium</p>
                  <p className='text-md font-semibold'>
                    {med}/{totMed}
                  </p>
                </div>
                <div className='rounded-md border p-3'>
                  <p className='text-md font-semibold text-red-600'>Hard</p>
                  <p className='text-md font-semibold'>
                    {hard}/{totHard}
                  </p>
                </div>
              </div>
            </div>
          </Card>
          <Card className='col-span-1 flex flex-col rounded-md p-3 pl-10 pt-10 text-2xl'>
            <div className='flex gap-2'>
              <Check className='text-cyan-500' />
              <p className='font-semibold'>
                Total Problems solved : <span className='text-blue-600'>283 </span>
              </p>
            </div>
            <div className='flex gap-2 pt-8'>
              <Check className='text-cyan-500' />
              <p className='font-semibold'>
                Total MCQ Attended : <span className='text-blue-600'>156 </span>
              </p>
            </div>
            <div className='flex gap-2 pt-8'>
              <Check className='text-cyan-500' />
              <p className='font-semibold'>
                Total Projects Uploaded :<span className='text-blue-600'>07 </span>
              </p>
            </div>
          </Card>
          <div className='col-span-2'>
            <Card className='rounded-md p-3'>
              <h1 className='mt-5 text-center text-xl'>Active Time in a Day</h1>
              <CalendarHeat />
            </Card>
          </div>
          <div className='col-span-2'>
            <Card className='rounded-md p-3'>
              <div className='m-5 flex justify-between'>
                <div className='flex items-center justify-center gap-4'>
                  <ClipboardList />
                  <h1 className='text-xl font-semibold'>Courses Enrolled</h1>
                </div>
                <Button variant='ghost'>View all Courses</Button>
              </div>
              {submissionsToShow.map((index, key) => (
                <div className='my-[1.05rem] flex justify-between rounded-md border p-3' key={key}>
                  <p>{index.name}</p>
                  <p>{index.date}</p>
                </div>
              ))}
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile

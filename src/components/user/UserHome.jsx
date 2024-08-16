import React from 'react'
import {
  Activity,
  ArrowUpRight,
  ChartNoAxesGantt,
  CodeXml,
  CreditCard,
  DollarSign,
  FlaskConical,
  GraduationCap,
  ListTodo,
  School,
  Users,
} from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardFooter,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Link } from 'react-router-dom'
import CalenderHeat from '@/components/CalenderHeatMap'
import { TabsContent } from '@/components/ui/tabs'
import { PlatFormAccess } from '../charts/PlatFormAccess'
import { OverallPerformance } from '../charts/OverallPerformance'
import { useAuth } from '@/contexts/AuthContext'

const InfoMark = [
  {
    label: 'Total Problems',
    count: 567,
    des: 'Total coding problems attended',
  },
  {
    label: 'MCQ',
    count: 108,
    des: 'Overall MCQ attended',
  },
  {
    label: 'Couses Enrolled',
    count: 25,
    des: 'Count on couses enrolled for learning',
  },
  {
    label: 'Couses Completed',
    count: 20,
    des: 'Couses completed in the portal',
  },
  {
    label: 'Projects',
    count: 7,
    des: 'Projects uploaded in the website',
  },
]
const Groups = [
  {
    name: 'DevConf-ReactJs-2024',
    email: 'alice.smith@example.com',
  },
  {
    name: 'WebSummit-2024',
    email: 'bob.jones@example.com',
  },
  {
    name: 'CodeFest-ExpressJS',
    email: 'charlie.brown@example.com',
  },
  {
    name: 'MangoDB-LearnAt',
    email: 'diana.ross@example.com',
  },
  {
    name: 'JSWorld-ReactJs-2024',
    email: 'eva.green@example.com',
  },
  {
    name: 'TechExpo-FullStack',
    email: 'frank.wright@example.com',
  },
]
const Status = [
  {
    course: 'Learn-React',
    owner: 'mohanV@gmail.com',
    percentage: '80',
  },
  {
    course: 'Learn-React',
    owner: 'mohanV@gmail.com',
    percentage: '50',
  },
  {
    course: 'Master-Angular',
    owner: 'susanB@gmail.com',
    percentage: '60',
  },
  {
    course: 'VueJS-Essentials',
    owner: 'davidK@gmail.com',
    percentage: '75',
  },
  {
    course: 'NodeJS-Fundamentals',
    owner: 'janeD@gmail.com',
    percentage: '25',
  },
  {
    course: 'Python-For-Beginners',
    owner: 'alexT@gmail.com',
    percentage: '95',
  },
]

const links = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: Activity,
  },
  {
    label: 'Profile',
    href: '/profile',
    icon: Users,
  },
  {
    label: 'Courses',
    href: '/courses',
    icon: GraduationCap,
  },
  {
    label: 'Coding',
    href: '/coding',
    icon: CodeXml,
  },
  {
    label: 'Projects',
    href: '/project/1',
    icon: ChartNoAxesGantt,
  },
  {
    label: 'Virtual Classroom',
    href: 'https://cosmos.video/v/xu7h-r5cw-7g4j/office',
    icon: School,
  },
  {
    label: 'Lab Smith',
    href: '/lab-smith',
    icon: FlaskConical,
  },
  {
    label: 'MCQ',
    href: '/mcq',
    icon: ListTodo,
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: DollarSign,
  },
]

function UserHome() {
  const { user } = useAuth()

  return (
    <div className='flex flex-1 flex-col gap-4 md:gap-8'>
      {/* Profile Information */}
      <div>
        <Card className='sm:col-span-2'>
          <CardHeader className='pb-3'>
            <CardTitle className='mb-3 text-3xl font-bold'>{user?.fullname}</CardTitle>
            <CardDescription className='space-x-2 leading-relaxed'>
              As a Full Stack Developer, you specialize in designing and implementing robust web
              applications. You excel in both front-end and back-end technologies, ensuring seamless
              user experiences and efficient server-side operations. Your expertise includes a
              diverse range of tools and frameworks, allowing you to build dynamic and responsive
              applications.
            </CardDescription>
            <div className='flex justify-between py-3'>
              <div className='space-y-2'>
                <p>
                  <span className='font-semibold'>Degree: </span>B.Tech Information Technology
                </p>
                <p>
                  <span className='font-semibold'>College: </span>Sri Krishna College of Engineering
                  and Technology
                </p>
              </div>
              <div className='flex flex-col items-center gap-2'>
                <Button>Intermediate</Button>
                <p>
                  <span className='font-semibold'>Level: </span>4 of 5
                </p>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>

      <div>
        <h4 className='mb-3 text-xl font-semibold tracking-tight'>Pages</h4>

        <div className='flex flex-wrap gap-3'>
          {links.map((link, index) => (
            <Button key={index} asChild className='gap-2' variant='outline'>
              <Link to={link.href}>
                <link.icon className='size-4' />
                {link.label}
              </Link>
            </Button>
          ))}
        </div>
      </div>

      {/* count of the usage */}
      <div>
        <h4 className='mb-3 text-xl font-semibold tracking-tight'>Performance</h4>
        <div className='grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-5'>
          {InfoMark.map((cont, index) => (
            <Card x-chunk='dashboard-01-chunk-3' key={index}>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>{cont.label}</CardTitle>
                <Activity className='h-4 w-4 text-muted-foreground' />
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>+{cont.count}</div>
                <p className='text-xs text-muted-foreground'>{cont.des}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Daily heapMap*/}
      <Card className='w-full'>
        <CalenderHeat />
      </Card>
      {/* course and group status */}
      <div className='grid gap-4 md:gap-8 lg:grid-cols-3 xl:grid-cols-3'>
        <Card x-chunk='dashboard-01-chunk-4' className='col-span-2'>
          <CardHeader className='flex flex-row items-center'>
            <div className='grid gap-2'>
              <CardTitle>Your Groups</CardTitle>
              <CardDescription>Groups that you have been joined for learning</CardDescription>
            </div>
            <Button asChild size='sm' className='ml-auto gap-1'>
              <Link to='#'>
                View All
                <ArrowUpRight className='h-4 w-4' />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Group</TableHead>
                  <TableHead className='text-right'>View details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Groups.map((e, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <div className='font-medium'>{e.name}</div>
                      <div className='hidden text-sm text-muted-foreground md:inline'>
                        liam@example.com
                      </div>
                    </TableCell>
                    <TableCell className='text-right'>
                      <Button>View details</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card x-chunk='dashboard-01-chunk-5'>
          <CardHeader>
            <div className='flex items-center justify-between gap-4'>
              <CardTitle>Course Enrolled</CardTitle>
              <CardTitle>Completion(%)</CardTitle>
            </div>
          </CardHeader>
          <CardContent className='col-span-2 grid gap-8'>
            {Status.map((e, index) => (
              <div className='flex items-center gap-4' key={index}>
                <Avatar className='hidden h-9 w-9 sm:flex'>
                  <AvatarImage src='/avatars/02.png' alt='Avatar' />
                  <AvatarFallback>{e.course.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className='grid gap-1'>
                  <p className='text-sm font-medium leading-none'>{e.course}</p>
                  <p className='text-sm text-muted-foreground'>{e.owner}</p>
                </div>
                <div className='ml-auto font-medium'>{e.percentage}%</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      <div className='grid gap-4 md:gap-8 lg:grid-cols-10'>
        <div className='col-span-10 lg:col-span-4'>
          <OverallPerformance />
        </div>
        <div className='col-span-10 lg:col-span-6'>
          <PlatFormAccess />
        </div>
      </div>
    </div>
  )
}

export default UserHome

import * as React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { CgOrganisation } from 'react-icons/cg'
import { FaUserCircle } from 'react-icons/fa'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { IconType } from 'react-icons/lib'

import { useAuth } from '@/contexts/AuthContext'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { loginUser } from '@/service/user-auth.service'
import { loginAdmin } from '@/service/admin-auth.service'

export default function LoginPage() {
  const { isAuthenticated, isAdmin, setCredentials } = useAuth()

  const navigate = useNavigate()

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate(isAdmin ? '/admin' : '/user')
    }
  }, [isAuthenticated])

  const hash = window.location.hash
  const redirect = window.location.search + (hash == '#admin' || hash == '#user' ? hash : '')
  const [currentTab, setCurrentTab] = React.useState(
    hash == '#admin' || hash == '#user'
      ? hash //
      : isAdmin
        ? '#admin'
        : '#user',
  )

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = new FormData(e.target as HTMLFormElement)
    const data = {
      email: form.get('email')?.toString()!,
      password: form.get('password')?.toString()!,
    }

    const login = currentTab == '#admin' ? loginAdmin : loginUser

    login(data) //
      .then((data) => {
        toast.success('Successfully logged in')
        setCredentials(data)

        const searchParams = new URLSearchParams(redirect)
        if (searchParams.has('redirect')) {
          navigate(searchParams.get('redirect')!)
        } else {
          navigate('/' + data.role)
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.message)
        } else {
          toast.error(err.message)
        }
      })
  }

  const handleTabChange = (tabName: string) => {
    setCurrentTab(tabName)
    window.location.hash = tabName
  }

  return (
    <div className='grid min-h-screen grid-cols-12'>
      <div className='col-span-5 flex bg-white'>
        <div
          className='ml-auto w-full max-w-sm'
          style={{
            backgroundImage:
              hash == '#admin'
                ? 'url(/images/illustrations/freepik-export-2024072905240863ZJ.png)'
                : 'url(/images/illustrations/3d-portrait-high-school-teenager.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      <div className='relative col-span-7 grid flex-1 place-items-center'>
        <Button variant='ghost' className='absolute right-4 top-4 md:right-8 md:top-8' asChild>
          <Link to={'/auth/register' + redirect}>Register</Link>
        </Button>
        <Tabs defaultValue={currentTab} className='w-[400px]' onValueChange={handleTabChange}>
          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger value='#user'>USER</TabsTrigger>
            <TabsTrigger value='#admin'>ADMIN</TabsTrigger>
          </TabsList>
          <TabsContent value='#user'>
            <LoginForm HeaderIcon={FaUserCircle} handleSubmit={handleSubmit} redirect={redirect} />
          </TabsContent>
          <TabsContent value='#admin'>
            <LoginForm
              HeaderIcon={CgOrganisation}
              handleSubmit={handleSubmit}
              redirect={redirect}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

type LoginFormProps = {
  HeaderIcon: IconType
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  redirect?: string
}

const LoginForm: React.FC<LoginFormProps> = ({ HeaderIcon, handleSubmit, redirect }) => {
  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <Card className='border-none shadow-none'>
      <CardHeader className='px-0'>
        <div className='flex items-center justify-between'>
          <div>
            <h2 className='text-2xl font-semibold tracking-tight'>Welcome back</h2>
            <p className='text-muted-foreground'>Login to your account to continue</p>
          </div>
          <HeaderIcon size={50} />
        </div>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className='space-y-2 px-0'>
          <div className='space-y-1'>
            <Label htmlFor='email'>Email</Label>
            <Input id='email' name='email' placeholder='Email address' required />
          </div>
          <div className='relative space-y-1'>
            <Label htmlFor='password'>Password</Label>
            <Input
              id='password'
              name='password'
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              required
            />
            <div
              className='absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 pt-6'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeIcon size={16} /> : <EyeOffIcon size={16} />}
            </div>
          </div>
        </CardContent>
        <CardFooter className='flex items-center justify-center px-0'>
          <Button type='submit' className='mt-10 w-full'>
            LOGIN
          </Button>
        </CardFooter>
      </form>
      <div className='mb-5 flex justify-end gap-3'>
        <Link to={'/auth/register' + redirect} className='text-black-500 text-sm underline'>
          Don't have an account?
        </Link>
      </div>
    </Card>
  )
}

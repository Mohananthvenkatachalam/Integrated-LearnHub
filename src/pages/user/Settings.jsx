import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardFooter,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useState } from 'react'
import { tr } from '@faker-js/faker'
import { useAuth } from '@/contexts/AuthContext'

export default function Settings() {
  const [edit, setEdit] = useState(false)
  // const user = JSON.parse(localStorage.getItem('user'))
  const { user } = useAuth()
  return (
    <div className='grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-6'>
      <div className='col-span-1'>
        <Card className='flex h-[500px] flex-col items-center justify-center'>
          <header className='space-y-4 p-4'>
            <div className='space-x-4 text-center'>
              <img
                src='https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg'
                alt='Avatar'
                width='96'
                height='96'
                className='mx-auto rounded-full border'
                style={{ aspectRatio: '96/96', objectFit: 'cover' }}
              />
              <div className='space-y-1.5'>
                <h1 className='text-2xl font-bold'>{user.fullname}</h1>
                <p className='text-gray-500 dark:text-gray-400'>
                  {user.role === 'user' ? 'Student' : user.fullname + ' Admin'}
                </p>
              </div>
            </div>
          </header>
        </Card>
      </div>
      <div>
        <Card>
          <div className='p-6'>
            <div className='space-y-2'>
              <h2 className='text-lg font-semibold'>PERSONAL INFORMATION</h2>
              <div className='gap-6 pt-4'>
                <div className='flex items-center justify-center gap-5'>
                  <Label htmlFor='name'>Name:</Label>
                  <Input
                    id='name'
                    {...(edit ? { disabled: false } : { disabled: true })}
                    placeholder={user.fullname}
                    defaultValue={user.fullname}
                  />
                </div>
              </div>
              <div className='gap-6 pt-4'>
                <div className='flex items-center justify-center gap-5'>
                  <Label htmlFor='email' className='p-[2px]'>
                    Email:{' '}
                  </Label>
                  <Input
                    {...(edit ? { disabled: false } : { disabled: true })}
                    id='email'
                    placeholder={user.email}
                  />
                </div>
              </div>
              <div className='gap-6 pt-4'>
                <div className='flex items-center justify-center gap-5'>
                  <Label htmlFor='phone'>Phone: </Label>
                  <Input
                    id='phone'
                    {...(edit ? { disabled: false } : { disabled: true })}
                    placeholder='Enter your phone'
                  />
                </div>
              </div>
            </div>
            <div className='pt-7'>
              <h2 className='pb-6 text-lg font-semibold'>Change Password</h2>
              <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                <div>
                  <Label htmlFor='current-password'>Current Password</Label>
                  <Input
                    id='current-password'
                    {...(edit ? { disabled: false } : { disabled: true })}
                    placeholder='************'
                    type='password'
                  />
                </div>
                <div>
                  <Label htmlFor='new-password'>New Password</Label>
                  <Input
                    id='new-password'
                    placeholder='Enter your new password'
                    {...(edit ? { disabled: false } : { disabled: true })}
                    type='password'
                  />
                </div>
                <div>
                  <Label htmlFor='confirm-password'>Confirm Password</Label>
                  <Input
                    id='confirm-password'
                    {...(edit ? { disabled: false } : { disabled: true })}
                    placeholder='Confirm your new password'
                    type='password'
                  />
                </div>
              </div>
            </div>
            <div className='mx-5 mt-8 flex items-start justify-between'>
              <Button
                size='lg'
                onClick={() => {
                  setEdit(false)
                }}
              >
                Save
              </Button>
              <Button
                size='lg'
                onClick={() => {
                  setEdit(true)
                }}
              >
                Edit
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

import * as React from 'react'
import Navbar from '@/components/user/Navbar'

import { Outlet, useNavigate } from 'react-router-dom'
import { CircularSpinner } from '@/components/ui/spinner'
import { useAuth } from '@/contexts/AuthContext'
import { toast } from 'sonner'

const UserLayout = () => {
  const { isAuthenticated, isAdmin } = useAuth()
  const pathname = window.location.pathname
  const navigate = useNavigate()

  React.useEffect(() => {
    if (!isAuthenticated) {
      return navigate('/auth/login?redirect=' + pathname + '#user', { replace: true })
    }

    if (isAdmin) {
      toast.error('You are not authorized to access the User page')
      navigate('/admin')
    }
  }, [isAuthenticated, isAdmin])

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className='relative flex h-full min-h-screen flex-col bg-gray-50 dark:bg-neutral-950'>
      <Navbar />

      <div className='relative flex-1'>
        <React.Suspense
          fallback={
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
              <CircularSpinner size='xl' />
            </div>
          }
        >
          <Outlet /> {/* This is where the child routes will be rendered */}
        </React.Suspense>
      </div>
    </div>
  )
}

export default UserLayout

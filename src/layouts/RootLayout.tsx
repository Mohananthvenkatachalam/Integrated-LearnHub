import React from 'react'
import { CircularSpinner } from '../components/ui/spinner'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='min-h-screen h-full'>
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
  )
}

export default RootLayout

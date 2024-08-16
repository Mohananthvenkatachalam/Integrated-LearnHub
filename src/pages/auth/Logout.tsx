import React from 'react'

const Logout = () => {
  React.useEffect(() => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setTimeout(() => {
      window.location.href = '/auth/login'
    }, 500)
  }, [])

  return (
    <div className='grid h-full min-h-screen place-items-center'>
      <h1 className='text-4xl font-semibold'>Logging out...</h1>
    </div>
  )
}

export default Logout

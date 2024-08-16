import { AuthProvider } from '@/contexts/AuthContext'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  )
}

export default AuthLayout

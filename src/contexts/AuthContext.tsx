import React, { ReactNode } from 'react'
import axios from 'axios'

import { LoginResponse } from '@/types/user'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

export function isAuthenticated() {
  const token = localStorage.getItem('token')

  if (!token) {
    return false
  }

  return JSON.parse(atob(token.split('.')[1])).exp * 1000 > new Date().getTime()
}

function saveCredentials(user: LoginResponse) {
  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('token', user.token)
  axios.defaults.headers['Authorization'] = user.token
}

function removeCredentials() {
  localStorage.removeItem('user')
  localStorage.removeItem('token')
  axios.defaults.headers['Authorization'] = null
}

export type Auth = {
  isAdmin: boolean
  setCredentials: (user: LoginResponse) => void
  logout: () => void
} & (
  | {
      isAuthenticated: true
      user: LoginResponse
      token: string
    }
  | {
      isAuthenticated: false
      token: null
      user: null
    }
)

const authenticated = isAuthenticated()
const user = JSON.parse(localStorage.getItem('user') ?? '{}')

const initialValue = {
  isAuthenticated: authenticated,
  token: authenticated ? localStorage.getItem('token') : null,
  user: authenticated ? user : null,
  isAdmin: authenticated ? user.role === 'admin' : false,
} as Auth

const AuthContext = React.createContext<Auth>(initialValue)

AuthContext.displayName = 'AuthContext'

export const useAuth = () => {
  return React.useContext(AuthContext)
}

type Props = {
  children?: ReactNode
}

export function AuthProvider({ children }: Props) {
  const [value, setValue] = React.useState<Auth>(initialValue)
  const navigate = useNavigate()

  React.useEffect(() => {
    if (!value.isAuthenticated) {
      return
    }

    axios //
      .get(`/api/auth/${value.user.role}/verify`)
      .catch(() => {
        toast.error('Session Expired')
        setTimeout(logout, 500)
      })
  }, [isAuthenticated])

  function setCredentials(user: LoginResponse) {
    saveCredentials(user)
    setValue((prev) => ({
      ...prev,
      isAdmin: user.role === 'admin',
      isAuthenticated: true,
      token: user.token,
      user: user,
    }))
  }

  function logout() {
    removeCredentials()
    setValue((prev) => ({
      ...prev,
      isAuthenticated: false,
      token: null,
      user: null,
    }))

    navigate('/auth/login#' + value.user?.role)
  }

  return (
    <AuthContext.Provider value={{ ...value, setCredentials, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

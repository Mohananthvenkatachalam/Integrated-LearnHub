import {
  loginSchema,
  registrationSchema,
} from '../../server/express-server/src/schema/userSchema.js'

import axios from 'axios'
import { z } from 'zod'

import { BACKEND_SERVER_URL } from '../constants/utils.js'
import { LoginResponse } from '@/types/user.js'
import { VerifyResponse } from './admin-auth.service.js'

type LoginCredentials = z.infer<typeof loginSchema>
type RegisterSchema = z.infer<typeof registrationSchema>

const authApi = axios.create({
  baseURL: `${BACKEND_SERVER_URL}/api/auth/user`,
})

export const verifyUser = async () => {
  const response = await authApi.get<VerifyResponse>('/verify', {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  })
  return response.data
}

export const registerUser = async (user: RegisterSchema) => {
  const response = await authApi.post('/register', user)
  return response.data
}

export const loginUser = async (user: LoginCredentials) => {
  const response = await authApi.post<LoginResponse>('/login', user)
  return response.data
}

import {
  loginSchema,
  registrationSchema,
} from '../../server/express-server/src/schema/userSchema.js'

import axios from 'axios'
import { z } from 'zod'

import { BACKEND_SERVER_URL } from '../constants/utils.js'
import { LoginResponse } from '@/types/user.js'

export type VerifyResponse = {
  success: boolean
}

type LoginCredentials = z.infer<typeof loginSchema>
type RegisterSchema = z.infer<typeof registrationSchema>

const authApi = axios.create({
  baseURL: `${BACKEND_SERVER_URL}/api/auth/admin`,
})

export const verifyAdmin = async () => {
  const response = await authApi.get('/verify', {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  })
  return response.data as VerifyResponse
}

export const registerAdmin = async (user: RegisterSchema) => {
  const response = await authApi.post('/register', user)
  return response.data
}

export const loginAdmin = async (user: LoginCredentials) => {
  const response = await authApi.post('/login', user)
  return response.data as LoginResponse
}

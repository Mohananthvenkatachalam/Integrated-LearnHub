import { UserRole } from 'server/express-server/src/schema/userSchema'

export type LoginResponse = {
  id: number
  fullname: string
  email: string
  phone: string
  profile_img: string
  role: UserRole
  token: string
}

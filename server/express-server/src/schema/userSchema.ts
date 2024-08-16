import { z } from 'zod';

export enum UserRole {
  Admin = 'admin',
  User = 'user',
}

export const userRole = z.nativeEnum(UserRole);

const id = z.number();
const email = z.string().email().max(255);
const password = z.string().min(6).max(255);
const hashed_password = z.string();
const fullname = z
  .string()
  .min(3)
  .max(255)
  .regex(/^[a-zA-Z\s]+$/, 'Fullname must be alphabetic with spaces');
const role = userRole.default(UserRole.User);
const profile_img = z.string().optional();
const phone = z.string().optional();
const created_at = z.date();
const updated_at = z.date();

const loginSchema = z.object({ email, password });

const registrationSchema = z.object({
  // Required
  email,
  password,
  fullname,

  // Optional
  profile_img,
  phone,
});

const userSchema = z.object({
  id,
  created_at,
  updated_at,

  email,
  hashed_password,
  role,

  fullname,
  profile_img,
  phone,
});

export { registrationSchema, loginSchema, userSchema };

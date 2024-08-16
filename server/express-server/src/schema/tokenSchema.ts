import { z } from 'zod';
import { userRole } from './userSchema';

export const tokenSchema = z.object({
  email: z.string().email().max(255),
  id: z.number(),
  role: userRole,
});

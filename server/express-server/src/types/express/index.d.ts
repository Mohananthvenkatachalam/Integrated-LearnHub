import { UserRole } from '../../schema/userSchema';

// to make the file a module and avoid the TypeScript error
export {};

declare global {
  namespace Express {
    export interface Request {
      email?: string;
      user_id?: number;
      role?: UserRole;
    }
  }
}

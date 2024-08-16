import jwt from 'jsonwebtoken';

import { Request, Response, NextFunction } from 'express';
import { JWT_SECRET } from '../constants/env';
import { tokenSchema } from '../schema/tokenSchema';

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let token = req.headers['authorization'];

  if (!token) {
    return res.status(401).send({ error: true, message: 'Token not recieved' });
  }

  try {
    token = token.split(' ')[1];

    const decoded = jwt.verify(token, JWT_SECRET);
    const parsedData = tokenSchema.safeParse(decoded);

    if (!parsedData.success) {
      return res.status(403).send({ error: true, message: 'Invalid token' });
    }

    req.email = parsedData.data.email;
    req.user_id = parsedData.data.id;
    req.role = parsedData.data.role;

    return next();
  } catch {
    return res.status(403).send({ error: true, message: 'Invalid token' });
  }
}

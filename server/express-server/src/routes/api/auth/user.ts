import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { Router } from 'express';

import { User } from '../../../models/user';
import { authMiddleware } from '../../../middleware/auth';
import { JWT_EXPIRES_IN, JWT_SECRET } from '../../../constants/env';
import {
  loginSchema,
  registrationSchema,
  UserRole,
} from '../../../schema/userSchema';

const router = Router();

// Verify the user
router.get('/verify', authMiddleware, (_req, res) => {
  return res.send({ success: true });
});

// Register
router.post('/register', async (req, res) => {
  console.log('/register =>', req.body);

  // Validate the request body
  const parsedData = registrationSchema.safeParse(req.body);

  if (!parsedData.success) {
    return res //
      .status(400)
      .send({ error: true, message: parsedData.error.issues });
  }

  const { fullname, email, password, profile_img, phone } = parsedData.data;
  const existingUser = await User.findOne({ where: { email } });

  if (existingUser) {
    return res
      .status(400)
      .send({ error: true, message: 'Email already exists' });
  }

  // Encrypt the password
  const saltRounds = 10;
  const hashed_password = await bcrypt.hash(password, saltRounds);

  await User.create({
    fullname,
    email,
    hashed_password,
    profile_img,
    phone,
    role: UserRole.User,
  });

  return res.status(201).send({
    message: 'User registered successfully',
  });
});

// Login
router.post('/login', async (req, res) => {
  console.log('/login =>', req.body);

  // Validate the request body against the schema
  const parsedData = loginSchema.safeParse(req.body);

  if (!parsedData.success) {
    return res
      .status(400)
      .send({ error: true, message: parsedData.error.issues });
  }

  const { email, password } = parsedData.data;
  const existingUser = await User.findOne({ where: { email } });

  if (!existingUser) {
    return res
      .status(404)
      .send({ error: true, message: 'The user does not exist' });
  }

  const isPasswordValid = //
    await bcrypt.compare(password, existingUser.hashed_password);

  if (!isPasswordValid) {
    return res.status(401).send({ error: true, message: 'Invalid Password' });
  }

  if (existingUser.role !== UserRole.User) {
    return res //
      .status(401)
      .send({ error: true, message: 'You are not authorized' });
  }

  // Generate the access token
  const accessToken = jwt.sign(
    { email, id: existingUser.id, role: UserRole.User },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );

  return res.send({
    id: existingUser.id,
    fullname: existingUser.fullname,
    email: existingUser.email,
    phone: existingUser.phone,
    profile_img: existingUser.profile_img,
    role: existingUser.role,
    token: accessToken,
  });
});

export default router;

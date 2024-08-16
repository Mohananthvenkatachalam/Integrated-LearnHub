import express from 'express';
import cors from 'cors';

// Routes
import adminAuthRoute from './routes/api/auth/admin';
import userAuthRoute from './routes/api/auth/user';
import openAIRoute from './routes/api/openai';
import resumeAnalysisRoute from './routes/api/resumeAnalysis';

import { createProxyMiddleware } from 'http-proxy-middleware';
import { PORT } from './constants/env';
import { connection } from './config/db.config';

const app = express();

// Database connection
connection
  .sync()
  .then(() => console.log('✅ Database successfully connected'))
  .catch(e => {
    console.error('❌ Database failed to connect ');
    console.error(e);
  });

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/api/auth/admin', adminAuthRoute);
app.use('/api/auth/user', userAuthRoute);
app.use('/resume-analysis', resumeAnalysisRoute);
app.use('/api/', openAIRoute);

// Proxy configuration
app.use(
  '/api/gateway',
  createProxyMiddleware({
    target: 'http://localhost:8080', // Spring Boot server
    changeOrigin: true,
    pathRewrite: {
      '^/': '/api/',
    },
  })
);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));

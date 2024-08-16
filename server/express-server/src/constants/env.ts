import dotenv from 'dotenv';
dotenv.config();

export const PORT = +process.env.PORT!;

// jwt
export const JWT_SECRET = process.env.JWT_SECRET!;
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN!;

// Development
export const NODE_ENV = process.env.NODE_ENV ?? 'development';
export const isDev = NODE_ENV !== 'production';

// Java Spring boot
export const JAVA_SPRING_BOOT_URL = process.env.JAVA_SPRING_BOOT_URL!;

// SQL
export const SQL_DIALECT = process.env.SQL_DIALECT!;
export const SQL_HOSTNAME = process.env.SQL_HOSTNAME!;
export const SQL_USERNAME = process.env.SQL_USERNAME!;
export const SQL_PASSWORD = process.env.SQL_PASSWORD!;
export const DATABASE_NAME = process.env.DATABASE_NAME!;


// OPEN API
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY!;

// Check if all environment variables are set
const requiredEnvVariables = [
  'PORT',
  'JAVA_SPRING_BOOT_URL',
  'JWT_SECRET',
  'JWT_EXPIRES_IN',
  'SQL_DIALECT',
  'SQL_HOSTNAME',
  'SQL_USERNAME',
  'SQL_PASSWORD',
  'DATABASE_NAME',
  'OPENAI_API_KEY'
];

requiredEnvVariables.forEach(env => {
  if (!process.env[env]) {
    console.error(`❌ Environment variable ${env} is missing`);
    console.error('   Please check your `.env` file');
    throw new Error(`Environment variable ${env} is missing`);
  }
});

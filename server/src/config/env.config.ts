import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || 'localhost',
  PORT: process.env.PORT || 8080,
  DATABASE_URL: process.env.DATABASE_URL || '',
  USER: process.env.USER || 'postgres',
  PASSWORD: process.env.PASSWORD || '12345',
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_PORT: process.env.DB_PORT || '5432',
  DATABASE: process.env.DATABASE || 'gd',
};

// Optionally check for missing environment variables
if (
  env.NODE_ENV === undefined ||
  env.HOST === undefined ||
  env.PORT === undefined ||
  env.DATABASE_URL === undefined ||
  env.USER === undefined ||
  env.PASSWORD === undefined ||
  env.DB_HOST === undefined ||
  env.DB_PORT === undefined ||
  env.DATABASE === undefined
) {
  throw new Error("Environment variables missing.");
}

export default env;

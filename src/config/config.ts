import { z } from 'zod';
import dotenv from 'dotenv';
import * as path from 'path';
import { Config } from 'types';

dotenv.config({ path: path.join(__dirname, 'root/.env') });

const DEFAULT_PORT = 8080;
const DEFAULT_LOG_LEVEL = 'info';

const envVarsSchema = z.object({
  NODE_ENV: z.enum(['production', 'development', 'test']),
  PORT: z.string()
    .transform((val) => (val ? Number(val) : DEFAULT_PORT))
    .refine((val) => !Number.isNaN(val), 'PORT must be a number'),
  LOG_LEVEL: z.enum(['error', 'warn', 'info', 'verbose', 'debug', 'silly']).default(DEFAULT_LOG_LEVEL),
  BASE_URL: z.string().url(),
  DATABASE_URL: z.string(),
  ACCESS_TOKEN_SECRET: z.string(),
  REFRESH_TOKEN_SECRET: z.string(),
}).passthrough();

const envVars = envVarsSchema.parse(process.env);

export const isDevelopment = envVars.NODE_ENV === 'development';
export const isTest = envVars.NODE_ENV === 'test';
export const isProduction = envVars.NODE_ENV === 'production';

export const config: Config = {
  env: envVars.NODE_ENV,
  logLevel: envVars.LOG_LEVEL,
  port: envVars.PORT,
  baseUrl: envVars.BASE_URL,
  accessTokenSecret: envVars.ACCESS_TOKEN_SECRET,
  refreshTokenSecret: envVars.REFRESH_TOKEN_SECRET,
};

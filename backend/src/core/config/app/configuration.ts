import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  env: process.env.NODE_ENV,
  port: process.env.HTTP_PORT,
  host: process.env.HTTP_HOST,
}));

import { registerAs } from '@nestjs/config';

export default registerAs('mongo', () => ({
  conn: process.env.MONGO_DB_CONN,
}));

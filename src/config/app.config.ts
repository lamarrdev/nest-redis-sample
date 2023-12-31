import { registerAs } from '@nestjs/config';

export default registerAs('appConfig', () => ({
  app_port: process.env.APP_PORT,
  redis_host: process.env.REDIS_HOST,
  redis_port: process.env.REDIS_PORT,
  redis_password: process.env.REDIS_PASSWORD,
}));

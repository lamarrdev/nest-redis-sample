import { registerAs } from '@nestjs/config';

export default registerAs('appConfig', () => ({
  app_port: process.env.APP_PORT,
  redis_port: process.env.REDIS_PORT,
}));

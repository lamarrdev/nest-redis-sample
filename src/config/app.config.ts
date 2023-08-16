import { registerAs } from '@nestjs/config';

export default registerAs('appConfig', () => ({
  port: process.env.PORT,
  // test: process.env.TESTVAR,

  //db_host: process.env.DB_HOST,
  //db_port: process.env.DB_PORT,
  //db_username: process.env.DB_USERNAME,
  //db_password: process.env.DB_PASSWORD,
  //db_database: process.env.DB_DATABASE,
  //db_synchronize: process.env.DB_SYNCHRONIZE,
}));

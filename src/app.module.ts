import { Module } from '@nestjs/common';
import { RedisModule } from '@liaoliaots/nestjs-redis';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

import appConfig from './config/app.config';
import { validationSchema } from './config/validationSchema';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
      load: [appConfig],
      isGlobal: true,
      validationSchema,
    }),
    RedisModule.forRoot({
      readyLog: true,
      config: {
        // host: 'localhost',
        host: 'my-redis',
        port: 6380,
        password: 'Cnrrnrhd3',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

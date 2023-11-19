import { ConfigService } from './config.service';
import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    NestConfigModule.forRoot({
      validationSchema: Joi.object({
        APP_NAME: Joi.string().required(),
        MONGODB_URL: Joi.string().required(),
        SESSION_SECRET_KEY: Joi.string().required(),
        JWT_SECRET_KEY: Joi.string().required(),
        WEB_URL: Joi.string().required(),
        NEXT_PUBLIC_API_URL: Joi.string().required(),
        EMAIL_USER: Joi.string().required(),
        ADMIN_EMAIL_USER: Joi.string().required(),
        EMAIL_APP_PASSWORD: Joi.string().required(),
      }),
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}

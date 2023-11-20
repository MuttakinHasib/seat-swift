import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '../config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.MONGODB_URI,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}

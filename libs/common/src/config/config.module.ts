import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

@Module({
  imports: [NestConfigModule.forRoot()],
  providers: [],
  exports: [],
})
export class ConfigModule {}

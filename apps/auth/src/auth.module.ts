import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from '@app/common';
import { User, UserSchema } from './users/models/user.schema';

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    DatabaseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}

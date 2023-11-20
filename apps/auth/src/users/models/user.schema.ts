import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

@Schema({ timestamps: true, versionKey: false })
export class User extends AbstractDocument {
  @Prop()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Prop({ unique: true })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Prop()
  @IsStrongPassword()
  @IsNotEmpty()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

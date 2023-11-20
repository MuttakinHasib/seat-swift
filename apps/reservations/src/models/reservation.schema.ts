import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true, versionKey: false })
export class Reservation extends AbstractDocument {
  @Prop()
  name: string;
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);

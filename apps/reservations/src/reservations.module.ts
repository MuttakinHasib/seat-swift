import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { ConfigModule, DatabaseModule, LogModule } from '@app/common';
import { Reservation, ReservationSchema } from './models/reservation.schema';

@Module({
  imports: [
    LogModule,
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: Reservation.name, schema: ReservationSchema },
    ]),
    ConfigModule,
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService],
})
export class ReservationsModule {}

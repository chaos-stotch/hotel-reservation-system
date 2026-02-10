import { Reservation } from "../../domain/Reservation";
import { ReservationRepository } from "../../infra/reservation-repository/ReservationRepository";

export class CreateReservation {
  constructor(private reservationRepo: ReservationRepository){}
  execute(startDate:Date, endDate:Date) {
    const newReservation = new Reservation(startDate, endDate);

    this.reservationRepo.save(newReservation)
  }
}
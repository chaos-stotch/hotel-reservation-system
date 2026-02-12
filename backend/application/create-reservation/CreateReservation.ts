import { Reservation } from "../../domain/Reservation";
import { ReservationRepository } from "../repositories/ReservationRepository";

export class CreateReservation {
  constructor(private reservationRepo: ReservationRepository){}
  execute(startDate:Date, endDate:Date) {
    const newReservation = new Reservation(startDate, endDate);

    this.reservationRepo.save(newReservation)
  }
}
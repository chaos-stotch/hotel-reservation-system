import { Reservation } from "../../domain/Reservation";

export class ReservationRepository {
  save(newReservation:Reservation) {
    console.log("New reservation:", newReservation)
  }
}
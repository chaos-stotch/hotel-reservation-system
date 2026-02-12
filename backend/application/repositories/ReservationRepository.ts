import { Reservation } from "../../domain/Reservation";

export interface ReservationRepository {
  save(newReservation:Reservation): void
}
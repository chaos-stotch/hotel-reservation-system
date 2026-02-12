import { Reservation } from "../../domain/Reservation";
import { ReservationRepository } from "../../application/repositories/ReservationRepository";

export class InMemoryReservationRepository implements ReservationRepository {
  private reservations: Reservation[] = []

  save(reservation:Reservation) {
    this.reservations.push(reservation)
  }

  findAll(): Reservation[] {
    return this.reservations
  }
}
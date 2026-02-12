import { CreateReservation } from "../application/create-reservation/CreateReservation";
import { InMemoryReservationRepository } from "../infra/reservation-repository/InMemoryReservationRepository"

const repo = new InMemoryReservationRepository();
const reservation = new CreateReservation(repo);

reservation.execute(new Date("2026-02-12"), new Date("2026-02-15"))
reservation.execute(new Date("2026-02-12"), new Date("2026-02-15"))
console.log("Reservations:", repo.findAll())

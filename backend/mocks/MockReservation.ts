import { CreateReservation } from "../application/create-reservation/CreateReservation";
import { Reservation } from "../domain/Reservation";

class MockReservation {
  saved: Reservation[] = [];

  save(reservation:Reservation) {
    this.saved.push(reservation)
    console.log("Reservation saved:", reservation)
  }
}

const mockRepo = new MockReservation();
const create = new CreateReservation(mockRepo);

create.execute(new Date("2026-02-10"), new Date("2026-02-16"))

console.log("Total saved:", mockRepo.saved.length)

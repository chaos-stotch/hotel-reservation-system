type ReservationState = "active" | "concluded" | "cancelled"

class Reservation {
  state: ReservationState = "active";
  startDate: Date;
  endDate: Date;

  constructor(startDate:Date, endDate:Date) {
    this.startDate = startDate;
    this.endDate = endDate;

    if (!(startDate < endDate)) {
      throw new Error("The start date must be earlier than the end date.");
    }
  }

  complete() {
    if (this.state != "active") {
      throw new Error("Only active reservations can be concluded.")
    }

    this.state = "concluded"
  }

  cancel() {
    if (this.state != "active") {
      throw new Error("Only active reservations can be cancelled.")
    }

    this.state = "cancelled"
  }
}
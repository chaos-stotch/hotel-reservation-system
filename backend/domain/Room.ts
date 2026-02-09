type RoomType = "standard" | "superior" | "deluxe"

class Room {
	roomNumber: number;
	roomType: RoomType;
	capacity: number;

	constructor(roomNumber:number, roomType:RoomType, capacity:number) {
		this.roomNumber = roomNumber;
		this.roomType = roomType;
		this.capacity = capacity;

		if (!(capacity > 0)) {
			throw new Error("The capacity must be greater than 0.")
		}
	}
}
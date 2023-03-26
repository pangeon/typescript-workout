import {Flight} from "./interfaceFlight";

export interface Booking {
    bookingNumber: number;
    flight: Flight;
    paid: boolean;
    seatsHeld: number;
    seatsReserved: number;
}
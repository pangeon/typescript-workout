import {isEmpty} from "./utils";
import {bookings} from "./data";
import {Booking} from "./interfaces/interfaceBooking";
import {getFlightByCityName} from "./flight";
import {Flight} from "./interfaces/interfaceFlight";

export const getBookingByNumber = (id: number): Booking => {
    let selectedBooking: {} = {};
    bookings.forEach(item => {
        if (item.bookingNumber === id)
            selectedBooking = item;
    });
    return selectedBooking as Booking;
}

export const addNewBooking =
    (bookingNumber: number, flightCityName: string, paid: boolean, seatsReserved: number): void => {
    let reservedFlight: Flight = getFlightByCityName(flightCityName), seatsHeld: number;

    seatsHeld = seatsReserved;
    reservedFlight.seatsHeld += seatsReserved;
    reservedFlight.seatsRemaining -= seatsHeld;
    paid = true;

    const booking: Booking = { bookingNumber, flight: reservedFlight, paid, seatsHeld, seatsReserved }
    bookings.push(booking);
}

export const printBookingByNumber = (id: number): void => {
    if (isEmpty(getBookingByNumber(id))) {
        console.log("Booking unavailable !");
    } else {
        console.log(getBookingByNumber(id));
    }
}

export const printAllBookingsList = (): void => {
    bookings.forEach(value => console.log(value));
}


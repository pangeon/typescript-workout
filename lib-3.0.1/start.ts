import {getFlightByCityName, isSeatsAvailable, printAllFlightsList} from "./flight";
import {addNewBooking, printAllBookingsList, printBookingByNumber} from "./bookings";
import {Booking} from "./interfaces/interfaceBooking";

console.log("1. --- Create new reservation --- ");

const reserveAndCheckFlight = (cityName: string, seatReserved: number, bookingNumber: number) => {
    if (isSeatsAvailable(cityName)) addNewBooking(bookingNumber, cityName, true, seatReserved);
    printBookingByNumber(bookingNumber);
};

try {
    reserveAndCheckFlight("Chicago", 1, 2);
    reserveAndCheckFlight("Chicago", 1, 3);
    reserveAndCheckFlight("Chicago", 1, 4);
} catch(Error) {
    console.log("Booking unavailable !")
}






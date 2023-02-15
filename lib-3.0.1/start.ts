import {getFlightByCityName, printAllFlightsList} from "./flight";
import {addNewBooking, printAllBookingsList, printBookingByNumber} from "./bookings";
import {Booking} from "./interfaces/interfaceBooking";

console.log("--- All flights list ---");
printAllFlightsList();

console.log("1. --- Create new reservation --- ");
addNewBooking(2, "Toronto", true, 0, 1);
printBookingByNumber(2);
//printAllBookingsList();

console.log("--- All bookings list ---");
printAllBookingsList();


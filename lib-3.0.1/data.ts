import {Flight} from "./interfaces/interfaceFlight";
import {Booking} from "./interfaces/interfaceBooking";


export const flights: Flight[] = [
    {destination: "Los Angeles", flightNumber: 106, seatsHeld: 0, seatsRemaining: 29, time: "5:30"},
    {destination: "Seattle", flightNumber: 872, seatsHeld: 0, seatsRemaining: 48, time: "17:10"},
    {destination: "Toronto", flightNumber: 398, seatsHeld: 12, seatsRemaining: 10, time: "0:10"},
    {destination: "Washington", flightNumber: 455, seatsHeld: 40, seatsRemaining: 0, time: "23:55"},
    {destination: "New York", flightNumber: 659, seatsHeld: 20, seatsRemaining: 30, time: "13:05"},
    {destination: "Chicago", flightNumber: 600, seatsHeld: 30, seatsRemaining: 2, time: "11:20"},
    {destination: "Boston", flightNumber: 129, seatsHeld: 19, seatsRemaining: 0, time: "12:30"},
    {destination: "Oklahoma", flightNumber: 991, seatsHeld: 15, seatsRemaining: 7, time: "22:00"},
    {destination: "Saint Louis", flightNumber: 100, seatsHeld: 33, seatsRemaining: 0, time: "20:00"},
    {destination: "Denver", flightNumber: 160, seatsHeld: 63, seatsRemaining: 1, time: "20:00"},
];

const getFlightById = (id: number): Flight => {
    let selectedFlight: {} = {};
    flights.forEach(item => {
        if (item.flightNumber === id)
            selectedFlight = item;
    });
    return selectedFlight as Flight;
}

export const bookings: Booking[] = [
    {bookingNumber: 1, flight: getFlightById(659), paid: true, seatsHeld: 0, seatsReserved: 1}
];
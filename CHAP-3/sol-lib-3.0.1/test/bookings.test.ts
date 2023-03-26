import { completeBooking, processPayment, startBooking } from '../bookings';
import {getDestinations} from "../flights";

const destinations = getDestinations();

describe('Reservations tests:', () => {

    test('startBooking():', () => {
        const booking = startBooking(destinations[0], 3);
        expect(booking).toEqual({
            bookingNumber: 1,
            flight: destinations[0],
            paid: false,
            seatsHeld: 3,
            seatsReserved: 0
        });
        console.log("-- startBooking -- \n", booking);
    });

    test('processPayment():', () => {
        let booking = startBooking(destinations[0], 3);
        booking = processPayment(booking);
        expect(booking.paid).toBe(true);

        console.log("-- processPayment -- \n", "booking.paid:", booking.paid);
    });

    test('completeBooking():', () => {
        let booking = startBooking(destinations[0], 3);
        booking = processPayment(booking);
        booking = completeBooking(booking);
        expect(booking.paid).toBe(true);
        expect(booking.seatsReserved).toBe(3);

        console.log(
            "-- completeBooking -- \n",
            "booking.paid:", booking.paid + "\n",
            "booking.seatsReserved", booking.seatsReserved);
    });


});
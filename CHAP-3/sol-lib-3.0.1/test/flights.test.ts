import {checkAvailability, getDestinations, holdSeats, reserveSeats} from "../flights";

describe('Flights tests:', () => {
    const destinations = getDestinations();
    let flight = destinations[0];

    test('getDestinations():', () => {
        expect(destinations).toHaveLength(7);

        console.log("-- getDestinations -- \n", "destinations.length:", destinations.length);
    });

    test('checkAvailability():', () => {
        const destinations = getDestinations();
        expect(checkAvailability(destinations[0], 3)).toBeTruthy();
        expect(checkAvailability(destinations[1], 5)).toBeFalsy();
        expect(checkAvailability(destinations[2], 300)).toBeFalsy();
        expect(checkAvailability(destinations[3], 3)).toBeTruthy();

        console.log(
            "-- checkAvailability -- \n",
            "destinations[0].seatsRemaining", destinations[0].seatsRemaining + "\n",
            "destinations[0].seatsHeld ", destinations[0].seatsHeld + "\n",
            "destinations[1].seatsRemaining", destinations[1].seatsRemaining + "\n",
            "destinations[1].seatsHeld ", destinations[1].seatsHeld + "\n",
            "destinations[2].seatsRemaining", destinations[2].seatsRemaining + "\n",
            "destinations[2].seatsHeld ", destinations[2].seatsHeld + "\n",
            "destinations[3].seatsRemaining", destinations[3].seatsRemaining + "\n",
            "destinations[3].seatsHeld ", destinations[3].seatsHeld);
    });

    test('holdSeats():', () => {
        console.log("-- holdSeats -- \n");
        expect.assertions(3);

        flight = holdSeats(flight, 3);
        expect(flight.seatsHeld).toBe(3);
        console.log("flight.seatsHeld(3):", flight.seatsHeld);

        flight = holdSeats(flight, 13);
        expect(flight.seatsHeld).toBe(16);
        console.log("flight.seatsHeld(13):", flight.seatsHeld);

        try {
            holdSeats(flight, 15);
        } catch(e) {
            expect((e as Error).message).toBe('No vacancies!');
            console.log("Error:", e);
        }
    });

    test('reserveSeats():', () => {
            console.log("-- reserveSeats -- \n");
            expect.assertions(3);

            flight = reserveSeats(flight, 3);
            expect(flight.seatsRemaining).toBe(27);
            console.log("flight.seatsRemaining(3):", flight.seatsRemaining);

            flight = reserveSeats(flight, 13);
            expect(flight.seatsRemaining).toBe(14);
            console.log("flight.seatsRemaining(13):", flight.seatsRemaining);

        try {
            expect(reserveSeats(flight, 1));
        } catch (e) {
            expect((e as Error).message).toBe('Seats have not been reserved !');
            console.log("Error:", e);
        }
    });
});
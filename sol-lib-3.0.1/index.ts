import { completeBooking, processPayment, startBooking } from './bookings';
import { getDestinations } from './flights';

const destinations = getDestinations();

let lagosBooking = startBooking(destinations[0], 1);
lagosBooking = processPayment(lagosBooking);
lagosBooking = completeBooking(lagosBooking);

console.log('Booked to Lagos', lagosBooking);
console.log('Flight to Lagos', destinations[0]);

try {
    startBooking(destinations[5], 7);
} catch ({e}) {
    console.log((e as Error).message);
}

let istanbulBooking = startBooking(destinations[6], 7);
istanbulBooking = processPayment(istanbulBooking);
istanbulBooking = completeBooking(istanbulBooking);

console.log('Booked to Istanbul', istanbulBooking);
console.log('Flight to Istanbul', destinations[6]);

try {
    startBooking(destinations[6], 1);
} catch ({e}) {
    console.log((e as Error).message);
}

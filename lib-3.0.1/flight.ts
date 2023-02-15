import {isEmpty} from "./utils";
import {flights} from "./data";
import {Flight} from "./interfaces/interfaceFlight";

export const getFlightByCityName = (cityName: string): Flight => {
    let selectedFlight: {} = {};
    flights.forEach(item => {
        if (item.destination === cityName)
            selectedFlight = item;
    });
    return selectedFlight as Flight;
}

export const addNewFlight =
    (destination: string, flightNumber: number, seatsHeld: number, seatsRemaining: number, time: string): void => {
    const flight: Flight = {destination, flightNumber, seatsHeld, seatsRemaining, time};
    flights.push(flight);
}

export const isSeatsAvailable = (cityName: string): boolean => {
    if (getFlightByCityName(cityName).seatsRemaining > 0) {
        console.log("Reservations approved !");
        return true;
    }
    throw Error("No vacancies !");
}
export const printFlightByCityName = (cityName: string): void => {
    if (isEmpty(getFlightByCityName(cityName))) {
        console.log("Flight unavailable !");
    } else {
        console.log(getFlightByCityName(cityName));
    }
}

export const printAllFlightsList = (): void => {
    flights.forEach(value => console.log(value));
}


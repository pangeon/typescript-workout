import {ComboPack} from "./types/ComboPack";
import {LandPack} from "./types/LandPack";
import {Shipping} from "./classes/Shipping";

const landPackToWarsav: ComboPack = {
    destinationCity: 'Warsav',
    destinationStreet: 'Aleje Jerozolimskie 54',
    postCode: '00111',
    weight: 2.43,
    packageSize: [13, 20, 33],
    isFragile: true,
    type: "LandPack"
}

const airPackToLondon: ComboPack = {
    destinationCountry: 'Great Britain',
    destinationCity: 'London',
    weight: 14,
    packageSize: [30, 30, 50],
    isFragile: false,
    isSafe: true,
    isAllowed: true,
    type: "AirPack"
}

const shipping = new Shipping;
console.log(shipping.prepareLabel(landPackToWarsav));
console.log(shipping.prepareLabel(airPackToLondon));



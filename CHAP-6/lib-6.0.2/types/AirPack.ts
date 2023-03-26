export type AirPack = {
    destinationCountry: string,
    destinationCity: string,
    weight: number;
    packageSize: [number, number, number];
    isFragile: boolean;
    isSafe: boolean;
    isAllowed: boolean;
    type: "AirPack";
    label?: string;
};
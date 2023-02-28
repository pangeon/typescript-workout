export type LandPack = {
    destinationCity: string;
    destinationStreet: string;
    postCode: string;
    weight: number;
    packageSize: [number, number, number];
    isFragile: boolean;
    type: "LandPack";
    label?: string;
};
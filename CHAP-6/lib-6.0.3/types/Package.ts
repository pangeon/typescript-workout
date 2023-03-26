import {PackageStatus} from "../interfaces/PackageStatus";

export type Package = {
    packageStatus: PackageStatus,
    barcode: number,
    weight: number
}
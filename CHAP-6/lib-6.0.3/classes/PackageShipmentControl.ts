import {PackageStatus} from "../interfaces/PackageStatus";
import {Package} from "../types/Package";

export class PackageShipmentControl {
    pack: Package;

    constructor(pack: Package) { this.pack = pack; }

    getStatus = () => this.pack.packageStatus;

    updateStatus = (status: string, state: boolean) => {
        this.pack.packageStatus[status] = state;
        return this.getStatus();
    };
}
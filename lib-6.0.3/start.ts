import {PackageShipmentControl} from "./classes/PackageShipmentControl";
import {Package} from "./types/Package";

const pack: Package = {
    packageStatus: {"shipped": false, "packed": true, "delivered": true},
    barcode: 123456,
    weight: 28
}

const packageControl = new PackageShipmentControl(pack);
console.log(packageControl.getStatus());
console.log(packageControl.updateStatus("shipped", true));

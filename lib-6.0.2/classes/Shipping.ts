import {ComboPack} from "../types/ComboPack";
import {LandPack} from "../types/LandPack";
import {AirPack} from "../types/AirPack";

export class Shipping {
    prepareLabel = (pack: ComboPack): ComboPack =>
        pack.type === "LandPack" ? this.toLandPack(pack) : this.toAirPack(pack);

    toAirPack = (pack: AirPack) => {
        pack.label = "air cargo";
        return pack;
    };
    toLandPack = (pack: LandPack) => {
        pack.label = "land cargo";
        return pack;
    };
}
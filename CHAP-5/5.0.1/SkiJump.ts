import {SkiJumpObjectTemplate} from "./SkiJumpObjectTemplate";
import {SkiJumpClassTemplate} from "./SkiJumpClassTemplate";

export class SkiJump implements SkiJumpClassTemplate{
    skiJumps: SkiJumpObjectTemplate[];
    constructor() {
        this.skiJumps = [];
    }
    defineSkiJump(skiJump: SkiJumpObjectTemplate): void {
        this.skiJumps.push(skiJump);
    }
    allSkiJumps():SkiJumpObjectTemplate[] {
        return this.skiJumps;
    }
}
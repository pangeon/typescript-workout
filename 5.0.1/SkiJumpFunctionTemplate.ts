import {SkiJumpObjectTemplate} from "./SkiJumpObjectTemplate";

export interface SkiJumpFunctionTemplate {
    (skiJump: SkiJumpObjectTemplate): unknown;
}
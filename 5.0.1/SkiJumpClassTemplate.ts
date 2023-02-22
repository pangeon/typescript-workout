import {SkiJumpFunctionTemplate} from "./SkiJumpFunctionTemplate";
import {SkiJumpObjectTemplate} from "./SkiJumpObjectTemplate";

export interface SkiJumpClassTemplate {
    defineSkiJump: SkiJumpFunctionTemplate;
    allSkiJumps(): SkiJumpObjectTemplate[];
}
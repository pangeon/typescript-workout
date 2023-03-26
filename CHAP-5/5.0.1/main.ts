import {SkiJumpClassTemplate} from "./SkiJumpClassTemplate";
import {SkiJump} from "./SkiJump";

const FISObjects: SkiJumpClassTemplate = new SkiJump();
FISObjects.defineSkiJump({name: 'Wielka Krokiew', pointK: 125, recordDistances: 147});
FISObjects.defineSkiJump({name: 'Große Olympiaschanze', pointK: 125, recordDistances: 144});

console.log(FISObjects.allSkiJumps());
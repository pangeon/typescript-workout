import {BasketBallGame} from "./classes/BasketBallGame";

const game = new BasketBallGame("LA Lakers", "Boston Celtics");

game.updateScore(3, true);
game.updateScore(2, false);
game.updateScore(2, true);
game.updateScore(2, false);
game.updateScore(2, false);
game.updateScore(2, true);
game.updateScore(2, false);

console.log(game.getScore());



// function logDuration(funcName: string, start: number, end: number): void {
//     const duration = end - start;
//     console.log(funcName, duration);
// }
//
// function timeCounter(func: Function): Function {
//     const result = {
//         [func.name]: function (this: any, ...args: any[]) {
//             const start: number = Date.now();
//             const result: any = func.apply(this, args);
//             const end: number = Date.now();
//             logDuration(func.name, start, end);
//             return result;
//         },
//     };
//     return result[func.name];
// }
//
// function getNumberChain(): number[] {
//     let numTab: number[] = []
//     for (let i = 0; i < 100; i++) {
//         numTab.push(i);
//     }
//     return numTab;
// }
//
// function main(): void {
//     getNumberChain();
//     getNumberChain();
//     getNumberChain();
// }


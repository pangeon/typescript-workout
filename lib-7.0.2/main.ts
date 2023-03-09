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
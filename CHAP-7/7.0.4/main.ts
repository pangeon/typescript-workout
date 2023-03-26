import {Game} from "./Game";

const game = new Game("Quake III: Arena");
game.play();
game.title = "FPS genre";
console.log(`${game.title} ${game.player}\n`);
for (const key in game) console.log(key);


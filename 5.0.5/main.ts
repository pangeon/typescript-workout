import {JavaScript} from "./JavaScript";
import {Java} from "./Java";

const langNetscape = new JavaScript('1995');
const langSun = new Java('1995');

console.log(langNetscape.setNewestVersion('ECMAScript 2022'));
console.log(langSun.chooseJDK(2));

console.log(langNetscape);
console.log(langSun);
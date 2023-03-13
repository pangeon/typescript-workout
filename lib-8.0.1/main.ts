import 'reflect-metadata'

import { AddOperator } from "./classes/AddOperator";
import { Calculator } from "./classes/Calculator";

const operator = new AddOperator();
const calc = new Calculator(operator);

console.log(calc.evaluate('1+8'));
import { inject, injectable } from "inversify";
import { TYPES } from "../const";
import { AddOperator } from "./AddOperator";

@injectable()
export class Calculator {
    constructor(@inject(TYPES.AddOperator) private addOperator: AddOperator) {}

    evaluate(expression: string) {
        const expressionParts = expression.match(/[\d\.]+|\D+/g);
        if (expressionParts === null) return null;

        const [operandA, operator, operandB] = expressionParts;
        if(operator !== this.addOperator.symbol) {
            throw new Error(`Not supported operator. 
            Expected ${this.addOperator.symbol} received: ${operator}`);
        }
        const result = this.addOperator.evaluate(Number(operandA), Number(operandB));
        return result
    }
}
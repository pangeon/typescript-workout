import { Operator } from "../../interfaces/Operator";
import { injectable } from "inversify";

@injectable()
export class AddOperator implements Operator {
    readonly symbol = "+";

    evaluate(a: number, b: number): number {
        return a+b;
    }
}
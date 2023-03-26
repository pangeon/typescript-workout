import { injectable } from "inversify";
import { Operator } from "../../interfaces/Operator";

@injectable()
export class SubsOperator implements Operator {
    symbol: string = '-';

    evaluate(a: number, b: number): number {
        return a - b;
    }

}
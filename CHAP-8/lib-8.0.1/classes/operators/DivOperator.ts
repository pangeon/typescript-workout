import { injectable } from "inversify";
import { Operator } from "../../interfaces/Operator";

@injectable()
export class DivOperator implements Operator {
    symbol: string = '/';

    evaluate(a: number, b: number): any {
        if (b !== 0) return a/b;
        return undefined;
    }
}
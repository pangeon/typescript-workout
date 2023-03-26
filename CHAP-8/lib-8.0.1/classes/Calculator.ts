import { inject, injectable, multiInject, optional } from "inversify";
import { Operator } from "../interfaces/Operator";
import { tryParseNumberString, tryParseOperatorSymbol } from "../utils/math";
import { TYPES } from "../const";
import { Logger } from "../interfaces/Logger";


@injectable()
export class Calculator {
    constructor(
      @multiInject(TYPES.Operator) private operators: Operator[],
      @inject(TYPES.Logger) @optional() private logger?: Logger 
    ) {}

    evaluate(expression: string) {
        const expressionParts = expression.match(/[\d\.]+|\D+/g);
        if (expressionParts === null) return null;
    
        const parsedExpressionParts = expressionParts.map(part => {
          const numberParseResult = tryParseNumberString(part);
          if (numberParseResult.isNumberString) return numberParseResult.number;
  
          const operatorParseResult = tryParseOperatorSymbol(part, this.operators);
          if (operatorParseResult.isOperatorSymbol) return operatorParseResult.operator;
  
          throw new Error(`Unexpected part : ${part}`);
        });

        const { result } = parsedExpressionParts.reduce<{result: number; queuedOperator: Operator | null;}>
        (
          (acc, part) => {
          if (typeof part === "number") {
            if (acc.queuedOperator === null) { return { ...acc, result: part }; }
            return { queuedOperator: null, result: acc.queuedOperator.evaluate(acc.result, part) };
          } 
          
          return { ...acc, queuedOperator: part };
          }, { result: 0, queuedOperator: null } 
        );

        this.logger && this.logger.log(`Result of calculation: ${expression} is ${result}`);

        return result;
    }
}
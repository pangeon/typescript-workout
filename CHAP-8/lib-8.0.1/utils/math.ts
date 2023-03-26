import { Operator } from "../interfaces/Operator";

type numStringType = { isNumberString: true; number: number } | { isNumberString: false }; 
type opSymbolType = | { isOperatorSymbol: true; operator: Operator } | { isOperatorSymbol: false }; 

export function tryParseNumberString(x: string): numStringType {
  const maybeNumber = Number.parseInt(x, 10);
  const isNumberString = !isNaN(maybeNumber);
  if (isNumberString) { return { isNumberString: true, number: maybeNumber }; }
  return { isNumberString: false };
}

export function tryParseOperatorSymbol(x: string, operators: readonly Operator[]): opSymbolType {
  const matchingOperator = operators.find(operator => operator.symbol === x);
  if (matchingOperator) { return { isOperatorSymbol: true, operator: matchingOperator }; }
  return { isOperatorSymbol: false };
}

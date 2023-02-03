enum Operator {
	ADD = "addition",
	SUBS = "substraction",
	MULT = "multiply",
	DIV = "divide",
	MOD = "modulo",
	POW = "power",
}

type Operation = (x: number, y: number) => number;

const operations: [Operator, Operation][] = [];

const add = function(first: number, second: number) {
	return first + second;
}

const subs = function(first: number, second: number) {
	return first - second;
}

const mult = function(first: number, second: number) {
	return first * second;
}

const div = function(first: number, second: number) {
	return first / second;
}

const mod = function(first: number, second: number) {
	return first % second;
}

const pow = function(first: number, second: number) {
	return first ** second;
}

operations.push([Operator.ADD, add]);
operations.push([Operator.SUBS, subs]);
operations.push([Operator.MULT, mult]);
operations.push([Operator.DIV, div]);
operations.push([Operator.MOD, mod]);
operations.push([Operator.POW, pow]);

const calc = function(first: number, second: number, op: Operator) {
	const tuple = operations.find(tpl => tpl[0] === op);
	const operation = tuple[1];
	const result = operation(first, second);
	return result
}

console.log("add", calc(4, 6, Operator.ADD));
console.log("subs", calc(13, 3, Operator.SUBS));
console.log("mult", calc(2, 5, Operator.MULT));
console.log("div", calc(70, 7, Operator.DIV));
console.log("mod", calc(70, 8, Operator.MOD));
console.log("pow", calc(2, 10, Operator.POW));
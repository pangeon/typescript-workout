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

const power = function(first: number, second: number) {
	return first ** second;
}

operations.push([Operator.ADD, add]);
operations.push([Operator.SUBS, subs]);
operations.push([Operator.MULT, mult]);
operations.push([Operator.DIV, div]);
operations.push([Operator.MOD, mod]);
operations.push([Operator.POW, power]);

const calc = function(first: number, second: number, op: Operator) {
	const tuple = operations.find(tpl => tpl[0] === op);
	
	// TODO: Repair it at the future !
	// @ts-ignore - probably bug in vs code 
	// working with command: "tsc 1.0.6/calculator.ts --target es6"
	const operation = tuple[1];

	// ! error TS2550: Property 'find' does not exist on type '[Operator, Operation][]'. 
	// ! Do you need to change your target library? Try changing the 'lib' compiler option to 'es2015' or later.
	
	const result = operation(first, second);
	return result
}

console.log("add", calc(4, 6, Operator.ADD));
console.log("subs", calc(13, 3, Operator.SUBS));
console.log("mult", calc(2, 5, Operator.MULT));
console.log("div", calc(70, 7, Operator.DIV));
console.log("mod", calc(70, 8, Operator.MOD));
console.log("power", calc(2, 10, Operator.POW));
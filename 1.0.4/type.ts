const days = 7;
const capitalOfFrance = "Paris";
const isSummer = false;
const today = new Date();
const elementalSymbol = ["Se", "Au", "Ag", "H", "Be", "Rg"];
const notDefined = undefined;
const NULL = null;
const pow = (x: number, y: number) => x**y;
const func = { pow };

const everything = [days, capitalOfFrance, isSummer, today, elementalSymbol, notDefined, NULL, pow, func];

let i: number = 0;
for (const iterator of everything) {
    i++;
    const type = typeof iterator
    console.log(i, iterator, type);
}

/* Output:
1 7 'number'
2 'Paris' 'string'
3 false 'boolean'
4 2023-02-02T18:31:21.948Z 'object'
5 [ 'Se', 'Au', 'Ag', 'H', 'Be', 'Rg' ] 'object'
6 undefined 'undefined'
7 null 'object'
8 [Function: pow] 'function'
9 { pow: [Function: pow] } 'object'
*/




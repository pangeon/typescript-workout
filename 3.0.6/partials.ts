const plus = (x: number, y: number): number => x + y;

const plusplus = (x: number): ((y: number) => number) => (y: number): number => x + y;

function plusplusFunc(x: number) {
    return function(y: number) {
        return x + y;
    };
}

const sumPart = plusplus(Math.PI);
console.log(sumPart(Math.E));

const sumPartFunc = plusplusFunc(Math.PI);
console.log(sumPartFunc(Math.E));


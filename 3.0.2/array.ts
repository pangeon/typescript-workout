const primeNumbers = [11, 3, 7, 5, 2];
const naturalNumbers = [5, 1, 2, 3, 4, 0];
const perfectNumbers = [28, 6, 496, 8128, 33550336];
const naturalNumbersReverse = [5, 4, 3, 2, 1, 0];

function arrCompare(arr_x: number[], arr_y: number[]): boolean {
    if(arr_x.length !== arr_y.length) return false;

    arr_y.sort();
    arr_x.sort();

    for (let i = 0; i < arr_x.length; i++)
        if (arr_x[i] !== arr_y[i]) return false;

    return true;
}

console.log(`Whether the [${primeNumbers}] and [${naturalNumbers}] is equal ?`,
    arrCompare(primeNumbers, naturalNumbers));

console.log(`Whether the [${primeNumbers}] and [${perfectNumbers}] is equal ?`,
    arrCompare(primeNumbers, perfectNumbers));

console.log(`Whether the [${naturalNumbers}] and [${perfectNumbers}] is equal ?`,
    arrCompare(naturalNumbers, perfectNumbers));

console.log(`Whether the [${naturalNumbers}] and [${naturalNumbersReverse}] is equal ?`,
    arrCompare(naturalNumbers, naturalNumbersReverse));


import {europeanCountriesAreas} from "./data";
const testSet: number[] = europeanCountriesAreas();

/* AVG */
const avr = (values: number[]): number => values.reduce((prev, curr) => prev + curr, 0) / values.length;
const average = avr(testSet);

/* SD */
const stdev = (values: number[]): number => {
    const squareDiffs = values.map((value: number): number => {
       const diff = value - average;
       return diff * diff;
    });
    return Math.sqrt(avr(squareDiffs));
}
console.log("Average:", average, "km^2");
console.log("Standard deviation:", stdev(testSet), "km^2");





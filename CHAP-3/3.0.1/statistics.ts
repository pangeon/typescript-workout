import {dataLength, europeanCountries} from "./data";

/* Procedure 1 */
    let total = 0;

    for (let i = 0; i < dataLength; i++) {
            total += europeanCountries[i].area;
        }
    const average = total/dataLength;
/* Procedure 1 */

/* Procedure 2 */
    /* AVG */
    let totalAVG = 0;

    for (let i = 0; i < dataLength; i++) {
        totalAVG += europeanCountries[i].area;
    }
    const averageSD = totalAVG/dataLength;

    /* SD */
    const squareDiffs = [];

    for (let i = 0; i < dataLength; i++) {
        const diff = europeanCountries[i].area - averageSD;
        squareDiffs.push(diff**2);
    }
    let totalSD = 0;
    for (let i = 0; i < squareDiffs.length; i++) {
        totalSD += squareDiffs[i];
    }

    /* RES */
    const standardDeviation = Math.sqrt(totalSD / squareDiffs.length);

    console.log("Average:", average, "km^2");
    console.log("Standard deviation:", standardDeviation, "km^2");
/* Procedure 2 */






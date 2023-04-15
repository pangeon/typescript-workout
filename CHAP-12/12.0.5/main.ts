import { readFile, readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const dir = resolve(__dirname, 'books.txt');

readFile(dir, (error, data) => {
    console.log("\nLektury obowiązkowe - matura | 2023\n");
    error ? error : console.log(data.toString());
})

console.log("Fragmenty utworów i wiersze - matura | 2023\n");

const fragments = readFileSync(resolve(__dirname, 'fragments.txt'));
const poems = readFileSync(resolve(__dirname, 'poems.txt'));

writeFileSync(
    resolve(__dirname, 'supplementaryLiterature.txt'), 
    [fragments, poems].join('\n')
);

const supplementary = resolve(__dirname, 'supplementaryLiterature.txt');

console.log(readFileSync(supplementary).toString());

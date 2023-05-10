import { promises, readFileSync } from "fs";
import { resolve } from "path";

Promise.all([
    promises.readFile(resolve(__dirname, "books.txt")),
    promises.readFile(resolve(__dirname, "fragments.txt")),
    promises.readFile(resolve(__dirname, "poems.txt")),
])
.then(
    (files) => 
        promises.writeFile(
            resolve(__dirname, "full-list.txt"), files.join('\n')
        )
)
.finally(() => 
    console.log(
        readFileSync(
            resolve(__dirname, "full-list.txt")).toString())
);

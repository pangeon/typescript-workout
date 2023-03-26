const zoo = ["ant", "hamster", "giraffe", "horse", "whale"];

const wait = (ms: number) => {
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

// async function countNumbers() {
//     await wait(1000);
//     console.log(zoo[0]);
//     await wait(1000);
//     console.log(zoo[1]);
//     await wait(1000);
//     console.log(zoo[2]);
//     await wait(1000);
//     console.log(zoo[3]);
//     await wait(1000);
//     console.log(zoo[4]);
//     await wait(1000);
// }
// countNumbers(); 

async () => {
    for (const animal of zoo) {
        await wait(1000);
        console.log(animal);
    }
}





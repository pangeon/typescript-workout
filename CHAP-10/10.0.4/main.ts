const creatures = ["ant", "hamster", "giraffe", "horse", "whale"];

const delay = (ms: number) => {
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

// delay(1000)
// .then(() => console.log(creatures[0]))
// .then(() => delay(1000))
// .then(() => console.log(creatures[1]))
// .then(() => delay(1000))
// .then(() => console.log(creatures[2]))
// .then(() => delay(1000))
// .then(() => console.log(creatures[3]))
// .then(() => delay(1000))
// .then(() => console.log(creatures[4]))
// .then(() => delay(1000));

let promise = Promise.resolve();
for (const creature of creatures) {
    promise = promise
        .then(() => delay(1000))
        .then(() => console.log(creature));
}
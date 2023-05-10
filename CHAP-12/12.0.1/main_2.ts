const randomPromise = async (num: number = 0) => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            const result = Math.floor(Math.random() * 100) + num;
            if (result % 10 === 0) {
                reject("Error !");
            } else {               
                console.log(`Random number: ${result}`);
                resolve(result);
            }  
        }, 1000);
    });
}

randomPromise(0)
    .then((value: number) => randomPromise(value))
    .then((value: number) => randomPromise(value))
    .then((value: number) => randomPromise(value))
    .then((value: number) => randomPromise(value))
    .then((value: number) => randomPromise(value))
    .then((value: number) => randomPromise(value))
    .then((value: number) => randomPromise(value))
    .then((value: number) => randomPromise(value))
    .then((value: number) => randomPromise(value))
    .then((value: number) => randomPromise(value))
    .catch(err => console.error(err))
    .finally(() => console.log("Finish !"));


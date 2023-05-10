let loopCount = 0;

const randx = async (num: number = 0) => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            const result = Math.floor(Math.random() * 100) + num;
            if (result % 10 === 0) {
                reject("Error !");
            } else {
                resolve(result);
            }
        }, 1000);
    });
}

const go = () => {
    Promise.all(Array(10).fill(null).map(() => randx()))
    .then(values => console.log(`Total result is: ${values.reduce((prev, current) => prev + current, 0)}`))
    .catch(go)
    .finally(() => console.log(`End loop ${++loopCount}`));
}
go();

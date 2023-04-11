export const randomer = async (num: number = 0) => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            const value = Math.floor(Math.random() * 100) + num;
            if (value % 10 === 0) {
                reject("Error !");
            } else {
                console.log(`Number: ${value}`)
                resolve(value);
            }
        }, 1000);
    });
}

const generator = (iterations: number) => {
    Promise.allSettled(
        Array(iterations).fill(null).map(() => randomer())
    ).then((settledResult) => {
        const result = settledResult.reduce(
            (prev, curr) => {
                return curr.status === "fulfilled" ? 
                { ...prev, succeeded: prev.succeeded + 1, total: prev.total + curr.value } :
                { ...prev, failed: prev.failed + 1 };
            },
            {
                failed: 0,
                succeeded: 0,
                total: 0
            }
        );
        console.log(result); 
    }
    ).finally(() => console.log("Ready !"));
};

generator(10);
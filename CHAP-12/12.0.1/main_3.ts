const randomPromiseAll = async (num: number = 0) => {
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

Promise.all([
    randomPromiseAll(), 
    randomPromiseAll(), 
    randomPromiseAll(), 
    randomPromiseAll(), 
    randomPromiseAll(),
    randomPromiseAll(), 
    randomPromiseAll(), 
    randomPromiseAll(), 
    randomPromiseAll(), 
    randomPromiseAll()
])
.then(values => console.log(`Total result is: ${values.reduce((prev, current) => prev + current, 0)}`))
.catch(err => console.log(err))
.finally(() => console.log("Finish !"));


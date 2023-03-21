const animals = ["ant", "hamster", "giraffe", "horse", "whale"];

setTimeout(() => {
console.log(animals[0]);
    setTimeout(() => {
        console.log(animals[1]);
        setTimeout(() => {
            console.log(animals[2]);
            setTimeout(() => {
                console.log(animals[3]);
                setTimeout(() => {
                    console.log(animals[4]);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
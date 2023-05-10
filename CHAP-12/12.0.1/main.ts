const random = async (num: number, fn: Function) => {
    setTimeout(() => {
        const result = Math.floor(Math.random() * 100) + num;
        console.log(`Radom number: ${result}`);
        fn(result);
    }, 1000);
}



random(0, (value: number) => {
    random(value, (value: number) => {
        random(value, (value: number) => {
            random(value, (value: number) => {
                random(value, (value: number) => {
                    random(value, (value: number) => {
                        random(value, (value: number) => {
                            random(value, (value: number) => {
                                random(value, (value: number) => {
                                    random(value, () => {});
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});



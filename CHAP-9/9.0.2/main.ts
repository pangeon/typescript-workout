type AnyFunction = (...args: any[]) => any;
type KeyGetter<T extends AnyFunction> = (...args: Parameters<T>) => string;

function memoize<T extends AnyFunction>(fn: T, keyGetter?: KeyGetter<T>) {
    const cache: Record<string, ReturnType<T>> = {};

    return (...args: Parameters<T>) => {
        const key = (keyGetter || JSON.stringify)(args);
        if ((key in cache)) cache[key] = fn(...args);
        return cache[key]; 
    }
}

function slowCalc(a: number, b: number): number {
    while(Date.now() <= Date.now() + 10000);
    return a+b;
}

const wrapToMemoize = memoize(slowCalc);
wrapToMemoize(1, 2);

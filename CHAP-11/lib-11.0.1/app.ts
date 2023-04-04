type UnaryFunction<T> = (x: T) => T;
type SuperUnnaryFn<T, R> = T extends void ? () => R : (arg: T) => R;

function piped(...funcs: Array<UnaryFunction<any>>): UnaryFunction<any> {
    return (arg: any) => {
        let result = arg;
        for (const func of funcs)
            result = func(result);

        return result;
    };
}

function pipe(...funcs: Array<UnaryFunction<any>>): UnaryFunction<any>;
function pipe<R>(fn: SuperUnnaryFn<void, R>): SuperUnnaryFn<void, R>;
function pipe<T, R = T>(fn: SuperUnnaryFn<T, R>): SuperUnnaryFn<T, R>;
function pipe<T, A, R>(fn1: SuperUnnaryFn<T, A>, fn2: SuperUnnaryFn<A, R>): SuperUnnaryFn<T, R>;
function pipe<T, A, R>(fn1: SuperUnnaryFn<T, A>, fn2?: SuperUnnaryFn<A, R>): SuperUnnaryFn<T, R>;
function pipe<T, A, B, C, D, E, R>(
    fn1: SuperUnnaryFn<T, A>,
    fn2: SuperUnnaryFn<A, B>,
    fn3: SuperUnnaryFn<B, C>,
    fn4: SuperUnnaryFn<C, D>,
    fn5: SuperUnnaryFn<D, E>,
    fn6: SuperUnnaryFn<E, R>,
): SuperUnnaryFn<T, R>;

function pipe<T>(...fns: SuperUnnaryFn<any, any>[]): SuperUnnaryFn<any, any> {
    return (arg: T) => fns.reduce((prev, fn) => fn(prev), arg);
}

const composed = piped(
    (x: string) => x.toUpperCase(),
    x => [x, x].join(),
    x => x.length,
    x => x.toString(),
    x => Number(x),
    x => x**2
  );
  
  console.log('Result is:', composed('Welcome'));



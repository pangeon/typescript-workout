export const fn = async () => {
    return 'Hello async Promise';
}
export const gn = () => {
    return Promise.resolve('Hello Promise');
}

const result = fn();
const nextResult = gn();

console.log(result);
console.log(nextResult);

result.then((text) => console.log(text));
nextResult.then((text) => console.log(text));

const resolveIt = async () => {
    const result = await fn();
    console.log("resolveIt():", result);
}
const resolveItPromise = async () => {
    const result = await gn();
    console.log("resolveItPromise():", result);
}

resolveIt();
resolveItPromise();

export const count: any = {};

export function incrCounter(counterName: string) {
    count[counterName] ? count[counterName]++ : count[counterName] = 1;
}
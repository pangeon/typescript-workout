import { Constructable } from '../../7.0.1-7.0.3/types/Constructable';
import { incrCounter } from './Counter';

export function CountClass(counterName: string) {
    return function <T extends Constructable>(constructor: T) {
        const wrappedConstructor: any = function (...args: any[]) {
            const result = new constructor(...args);
            incrCounter(counterName);
            return result;
        }
        wrappedConstructor.prototype = constructor.prototype;
        return wrappedConstructor;
    }
}
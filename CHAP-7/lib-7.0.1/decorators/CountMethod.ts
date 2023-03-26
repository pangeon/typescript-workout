import { incrCounter } from "./Counter";

export function CountMethod(counterName: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        if(descriptor.value) {
            const original = descriptor.value;
            descriptor.value = function (...args: any[]) {
                incrCounter(counterName);
                return original.apply(this, args);
            };
        }
        if(descriptor.get) {
            const original = descriptor.get;
            descriptor.get = function () {
                incrCounter(counterName);
                return original.apply(this, []);
            };
        }
        if(descriptor.set) {
            const original = descriptor.set;
            descriptor.set = function (value: any) {
                incrCounter(counterName);
                return original.apply(this, [value]);
            };
        }
    }
}
import "reflect-metadata";

import {Constructable} from "../types/Constructable"

export function Authenticate(permission: string) {
    return function<F extends Constructable>(constructor: F) {
        const constructorWrapper: any = function(...args: any[]) {
            if(Reflect.hasMetadata("permissions", constructorWrapper)) {
                const permissions = Reflect.getMetadata("permissions", constructorWrapper) as string[];
                if(!permissions.includes(permission)) {
                    throw Error(`No permission ${permission}`)
                }
            }
            return new constructor(...args);
        };
        constructorWrapper.prototype = constructor.prototype;
        return constructorWrapper; 
    };
}

export function Timer() {    
    return function(target: any, propertyName: string, descriptor: PropertyDescriptor) {
        if (descriptor.value) {
            const original = descriptor.value;
            descriptor.value = function (...args: any[]) {
                const start = Date.now();
                const result = original.apply(this, args);
                const end = Date.now();
                const duration = end - start;
                if (Reflect.hasMetadata("durations", target, propertyName)) {
                    const existing = Reflect.getMetadata("durations", target, propertyName) as number[];
                    Reflect.defineMetadata("durations", existing.concat(duration), target, propertyName);
                } else {
                    Reflect.defineMetadata("durations", [duration], target, propertyName);
                }
                return result;
            }
        }
    }
}

export function Audit(message: string) {
    return function(_target: any, propertyName: string, descriptor: PropertyDescriptor) {
        if(descriptor.value) {
            const original = descriptor.value;
            descriptor.value = function (...args: any[]) {
                const result = original.apply(this, args);

                console.log(`[AUDIT] ${message} (${propertyName}) invoke with arguments:`);
                console.log(`[AUDIT]`, args);
                console.log(`[AUDIT] and return result:`);
                console.log(`[AUDIT]`, result);

                return result;
            }
        }
    }
}

export function BasketBallPoints(target: any, propertyKey: string, parameterIndex: number) {
    if(Reflect.hasMetadata("basket-ball-points", target, propertyKey)) {
        const existing = Reflect.getMetadata("basket-ball-points", target, propertyKey) as number[];
        Reflect.defineMetadata("basket-ball-points", existing.concat(parameterIndex), target, propertyKey);
    } else {
        Reflect.defineMetadata("basket-ball-points", [parameterIndex], target, propertyKey);
    }
}

export function Validate() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const original = descriptor.value;
        descriptor.value = function(...args: any[]) {
            if(Reflect.hasMetadata("basket-ball-points", target, propertyKey)) {
                const markedParams = Reflect.getMetadata("basket-ball-points", target, propertyKey) as number[];
                for (const param of markedParams) {
                    if(![1, 2, 3].includes(args[param])) {
                        throw Error(`Parameter in position ${param} should be only 1, 2 or 3`);
                    }
                }
            }
            return original.apply(this, args);
        }
    }
}
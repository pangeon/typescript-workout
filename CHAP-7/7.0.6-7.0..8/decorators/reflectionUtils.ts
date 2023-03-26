import "reflect-metadata";

export namespace MetaDataReflection {
    
    export function showDescription(target: any) {
        if (Reflect.hasMetadata("description", target)) {
            const classDescription = Reflect.getMetadata("description", target);
            console.log(`${target.name}: ${classDescription}`);
        }
    }

    export function showDescriptions(target: any) {
        if (Reflect.hasMetadata("description", target)) {
            const classDescriptions = Reflect.getMetadata("description", target);
            console.log(`${target.name}: ${classDescriptions}`);

            const methodNames = Object.getOwnPropertyNames(target.prototype);
            for (const methodName of methodNames) {
                if (Reflect.hasMetadata("description", target, methodName)) {
                    const description = Reflect.getOwnMetadata("description", target, methodName);
                    console.log(` ${methodName}: ${description}`);
                }
            }
        }
    }

    export function FieldReclectionAnnotation(text: string) {
        return function(target: any, propertyKey: string) {
            Reflect.defineMetadata("info", text, target, propertyKey);
        }
    }

    export function showFieldReclectionInfo(target: any) {
        for (const item in target) {
            if(Reflect.hasMetadata("info", target, item)) {
                const info = Reflect.getMetadata("info", target, item);
                console.log(`${item}: ${info}`);
            }
        }
    }

    export function Required(target: any, propertyKey: string, parameterIndex: number) {
        if (Reflect.hasMetadata("required", target, propertyKey)) {
            const existing = Reflect.getMetadata("required", target, propertyKey) as number[];
            Reflect.defineMetadata("required", existing.concat(parameterIndex), target, propertyKey);
        } else {
            Reflect.defineMetadata("required", [parameterIndex], target, propertyKey);
        }
    }
    
    export function Validate(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const original = descriptor.value;
        descriptor.value = function(...args: any[]) {
            if(Reflect.hasMetadata("required", target, propertyKey)) {
                const requiredParams = Reflect.getMetadata("required", target, propertyKey) as number[];
                for(const required of requiredParams) {
                    if(!args[required]) {
                        throw Error(`Parameter on position ${required} is required !`);
                    }
                }
            }
            return original.apply(this, args);
        }
    }
}

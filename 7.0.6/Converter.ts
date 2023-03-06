import "reflect-metadata";

class Converter {
    constructor(public arg: number) {}

    public toDec() { return this.arg.toString(10); }
    public toHex(): string { return this.arg.toString(16); }  
    public toOct(): string { return this.arg.toString(8); }
    
    /*
     * The Reflect.defineMetadata() method requires this to refer to 
     * the correct object to which metadata will be added. Arrow functions 
     * in JavaScript do not have their own this, instead, they refer to the 
     * this context in which they were created. Using Reflect.defineMetadata() 
     * with an arrow function can lead to errors and incorrect metadata setting. 
     * Therefore, it is recommended to avoid using Reflect.defineMetadata() 
     * with arrow functions. */
    
    public toBin = (): string => this.arg.toString(2);  
}

Reflect.defineMetadata("description", "JavaScript number converter", Converter);
Reflect.defineMetadata("description", "Convert value to decimal number", Converter, "toDec");
Reflect.defineMetadata("description", "Convert value to hexadecimal number", Converter, "toHex");
Reflect.defineMetadata("description", "Convert value to octal number", Converter, "toOct");
Reflect.defineMetadata("description", "Convert value to binary number", Converter, "toBin");

function showDescription(target: any) {
    if (Reflect.hasMetadata("description", target)) {
        const classDescription = Reflect.getMetadata("description", target);
        console.log(`${target.name}: ${classDescription}`);
    }
}

function showDescriptions(target: any) {
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

showDescriptions(Converter);
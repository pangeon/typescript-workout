export class Converter {
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


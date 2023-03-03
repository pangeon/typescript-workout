import {logger} from "../7.0.1-7.0.3/utils";

export class Game {
    constructor(public player: string) {};

    private _title: string = "";

    //@Enumerable(true)
    @LogMethod("Property: title")
    get title(): string { return this._title; }

    set title(value: string) { this._title = value; }

    //@Enumerable(true)
    @LogMethod("Method: play")
    public play(): void {
        console.log(`${this.player} is running now.`);
    }
}

/* Decorators */
/**
 *
 * @param value
 * @constructor
 *
 * use:
 * ```ts
 * interface PropertyDescriptor {
 *     configurable?: boolean;
 *     enumerable?: boolean;
 *     value?: any;
 *     writable?: boolean;
 *     get?(): any;
 *     set?(v: any): void;
 * }
 * ```
 */
function Enumerable(value: boolean) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        descriptor.enumerable = value;
    };
}
/**
 *
 * @param message
 * @constructor
 *
 * use:
 * ```ts
 * interface PropertyDescriptor {
 *     configurable?: boolean;
 *     enumerable?: boolean;
 *     value?: any;
 *     writable?: boolean;
 *     get?(): any;
 *     set?(v: any): void;
 * }
 * ```
 */
function LogMethod(message: string) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        if (descriptor.value) {
            const original = descriptor.value;
            descriptor.value = function(...args: any[]) {
                logger.info(`${message}: Method ${propertyKey} invoke`);
                return original.apply(this, args)
            }
        }
        if (descriptor.get) {
            const original = descriptor.get;
            descriptor.get = function() {
                logger.info(`${message}: Getter for ${propertyKey} invoke`);
                return original.apply(this, [])
            }
        }
        if (descriptor.set) {
            const original = descriptor.set;
            descriptor.set = function(value: any) {
                logger.info(`${message}: Setter for ${propertyKey} invoke`);
                return original.apply(this, [value])
            }
        }
    };
}
/* Decorators */
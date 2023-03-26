import {Constructable} from "../types/Constructable";
import {logger} from "../utils";

//@Token
//@ExtendToken(true)
@LogClass("Teacher decorator")
export class Teacher {
    constructor(public id: number, public name: string) {
        console.log("init new object Teacher...")
    };
}

/* Decorators */
function Token(constructor: Function) {
     constructor.prototype.token = true;
}

function ExtendToken(hasToken: boolean) {
    return function<T extends Constructable>(constructor: T) {
        return class extends constructor {
            token: boolean = hasToken;
        }
    }
}

function LogClass(message: string)  {
    return function <T extends Constructable>(constructor: T) {
        const loggingConstructor: any = function (...args: any[]) {
            logger.info(message);
            return new constructor(...args);
        }
        loggingConstructor.prototype = constructor.prototype;
        return loggingConstructor;
    }
}
/* Decorators */




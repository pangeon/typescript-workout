//@Token

import {Constructable} from "../types/Constructable";

@ExtendToken(true)
export class Teacher {
    constructor(public id: number, public name: string) {};
}

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




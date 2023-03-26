@Token(false)
export class Student {
    constructor(public id: number, public name: string) {};
}

function Token(hasToken: boolean) {
    return function (constructor: Function) {
        constructor.prototype.token = hasToken;
    }
}


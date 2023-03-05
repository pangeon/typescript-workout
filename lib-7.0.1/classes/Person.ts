import { CountClass } from "../decorators/CountClass";
import { CountMethod } from "../decorators/CountMethod";

@CountClass('person')
export class Person {
    
    private _firstName: string;
    private _lastName: string;
    private _birthday: Date;

    private _title: string = "";

    constructor(firstName: string, lastName: string, birthday: Date) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthday = birthday;
    }

    @CountMethod('person-title')
    get title(): string { return this._title; }

    @CountMethod('person-first-name')
    get firstName(): string { return this._firstName; }

    set title(title: string) { this._title = title }

    @CountMethod('person-full-name')
    getFullName(): string { return `${this.firstName} ${this._lastName}`};

    @CountMethod('person-age')
    getAge(): number { return new Date().getFullYear() - this._birthday.getFullYear() };

}
import { DeepPartial } from "./DeepPartial";

export interface User {
    getById(userId: string): any;
    name: {
      first: string;
      middle?: string;
      last: string;
    };
    email: string;
    age: number;
    gender: string;
    address: {
      street: string;
      city: string;
      country: string;
    };
}
export declare const User: User;
export declare const userUpdateData: DeepPartial<User>;
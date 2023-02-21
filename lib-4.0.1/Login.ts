import {ILogin} from "./ILogin";

export class Login {
    public readonly email: string;
    public readonly password: string;

    constructor(args: ILogin) {
        this.email = args.email;
        this.password = args.password;
    }
}
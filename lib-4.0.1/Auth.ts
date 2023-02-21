import {Login} from "./Login";
import {IAuth} from "./IAuth";

export class Auth {
    private readonly user: Login;
    private readonly source: string;

    constructor(args: IAuth) {
        this.user = args.user;
        this.source = args.source;
    }
    validUser = (): boolean => this.user.email === `admin@example.com` && this.user.password === `secret123`;
}
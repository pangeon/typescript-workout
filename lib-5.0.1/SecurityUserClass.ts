import {ISecurityUser} from "./ISecurityUser";
import {ISecurityAuth} from "./ISecurityAuth";

export class SecurityUserClass implements ISecurityUser {
    // @ts-ignore -- add in tsconfig.json line:
    // "strictPropertyInitialization": false
    // you must enable strict checking of property initialization in classes.
    user:ISecurityAuth

    getUser(): ISecurityAuth {
        return this.user
    }
    login(user: ISecurityAuth, password: string): ISecurityAuth {
        return this.user = user
    }
}

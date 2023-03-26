import {SecurityUserClass} from "./SecurityUserClass";
import {ISecurityAuth} from "./ISecurityAuth";
import {ISecurityUser} from "./ISecurityUser";

const user_1: ISecurityAuth = {
    email: `pangeon@tlen.pl`, loginAt: new Date().getTime(), token: `5012023`
}
const user_2: ISecurityUser = new SecurityUserClass();

console.log(user_2.login(user_1, "password123"));
console.log(user_2.getUser());
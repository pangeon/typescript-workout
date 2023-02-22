import {ISecurityAuth} from "./ISecurityAuth";

export interface ISecurityUser {
    user: ISecurityAuth
    getUser(): ISecurityAuth
    login(user: ISecurityAuth, password: string):ISecurityAuth
}
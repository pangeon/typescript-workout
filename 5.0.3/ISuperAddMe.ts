import { TUser } from "./TUser"

export interface ISuperAddMe {
    (user: TUser): TUser[];
}
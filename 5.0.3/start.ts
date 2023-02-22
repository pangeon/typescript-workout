import { TUser } from "./TUser";
import { ISuperAddMe } from "./ISuperAddMe";

let allUsers: TUser[] = [
    {email: 'pangeon@tlen.pl', userId: 1},
    {email: 'agnieszka.lasota1@vp.pl', userId: 2}
]

let addUser: ISuperAddMe;

addUser = function (user: TUser): TUser[] {
    return [
        ...allUsers,
        user
    ]
};

console.log(
    addUser(
        {email: 'sliwadamsir@onet.pl', userId: allUsers.length}
    )
)
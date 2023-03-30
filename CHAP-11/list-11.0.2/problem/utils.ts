import { db } from "./app";

export interface UserRow {
    id: number,
    name: string,
    email: string,
    is_admin: boolean;
    friends: string;
}

export function canOtherViewFriends(is_admin: number): boolean {
    return is_admin === 1;
}

export function getUserPrivacyPreferences(row: UserRow, callback: (err: Error | null, is_admin?: any) => void) {
    db.get(`SELECT is_admin FROM users WHERE id = ?`, [row.id], (err, row: UserRow) => {
        if (err) return callback(err);
        if (!row) return callback(new Error(`User ${row.id} not found`));
        callback(null, row.is_admin);
      });
}

export function getFriends(row: UserRow, callback: (err: Error | null, friends?: any) => void) {
    db.get(`SELECT friends FROM users WHERE id = ?`, [row.id], (err, row: UserRow) => {
        if (err) return callback(err);
        if (!row) return callback(new Error(`User ${row.id} not found`));
        callback(null, row.friends);
    });
}



// export function getFriends(row: UserRow, res: Response<any, Record<string, any>, number>, name: string) {
//     db.get(`SELECT friends FROM users WHERE id = ?`, [row.id], (err, row) => {
//         (err) ? console.error(err) : res.status(500).end();
//         if (!row) return res.status(404).send(`No friends found for user ${name}`);
        
//         const friends = (row as UserRow).friends.split(',').map(friend => friend.trim());
//         return res.status(200).json({ friends });
//     });
// }
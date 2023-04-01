import { db } from "./app";

export interface UserRow {
    id: number,
    name: string,
    email: string,
    is_admin: boolean;
    friends: string;
}

export const getUserPrivacyPreferences = (row: UserRow, callback: (err: Error | null, is_admin?: any) => void) => {
    db.get(`SELECT is_admin FROM users WHERE id = ?`, [row.id], (err, row: UserRow) => {
        if (err) return callback(err);
        if (!row) return callback(new Error(`User ${row.id} not found`));
        callback(null, row.is_admin);
    });
}
export const getFriends = (row: UserRow, callback: (err: Error | null, friends?: any) => void) => {
    db.get(`SELECT friends FROM users WHERE id = ?`, [row.id], (err, row: UserRow) => {
        if (err) return callback(err);
        if (!row) return callback(new Error(`User ${row.id} not found`));
        callback(null, row.friends);
    });
}
export const canOtherViewFriends = (is_admin: number): boolean => is_admin === 1;
import { db } from "./app";
import express from "express";

export interface UserRow {
    id: number,
    name: string,
    email: string,
    is_admin: boolean;
    friends: string;
}

export const handleDatabaseResponse = (res: express.Response, err: Error, row: UserRow) => {
    if (err) return res.status(500).end();
    getUserPrivacyPreferences(row, (err, is_admin) => handleGetUserPrivacyPrefereces(res, row, err, is_admin));
}

const handleGetUserPrivacyPrefereces = (res: express.Response, row: UserRow, err: Error, is_admin: any) => {
    if (err) return res.status(500).end();

    !canOtherViewFriends(is_admin) ? 
        res.status(403).send({ error: "You don't have permission to view this user's friends" }).end() :
        getFriends(row, (err, friends) => handleGetFriends(res, err, friends));
}
const handleGetFriends = (res: express.Response<any, Record<string, any>>, err: Error, friends: any): void => {
    err ? res.status(500).end() : res.status(200).send({ friends }).end();
}

const canOtherViewFriends = (is_admin: number): boolean => is_admin === 1;

const getUserPrivacyPreferences = (row: UserRow, callback: (err: Error | null, is_admin?: any) => void) => {
    db.get(`SELECT is_admin FROM users WHERE id = ?`, [row.id], (err, row: UserRow) => {
        if (err) return callback(err);
        if (!row) return callback(new Error(`User ${row.id} not found`));
        callback(null, row.is_admin);
    });
}

const getFriends = (row: UserRow, callback: (err: Error | null, friends?: any) => void) => {
    db.get(`SELECT friends FROM users WHERE id = ?`, [row.id], (err, row: UserRow) => {
        if (err) return callback(err);
        if (!row) return callback(new Error(`User ${row.id} not found`));
        callback(null, row.friends);
    });
}
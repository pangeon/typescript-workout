import async from 'async';
import express from "express";
import sqlite from 'sqlite3';

import { UserRow, getUserPrivacyPreferences, canOtherViewFriends, getFriends } from './utils';
import { ServerError } from './ServerError';
import { Callback } from './Callback';

export const db = new sqlite.Database('../db.sql', err => {
    if(err) console.log('Error connection to database:', err.message);
});

const app = express();

app.get('/:name/friends', (req, res) => {
    const name = req.params.name;

    async.waterfall(
        [
            (fn: Callback) => {
                    db.get(`SELECT id FROM users WHERE name = ?`, [name], (err, row) => {
                        if (err) return fn(err);
                        return fn(null, row);
                    }
                );
            },
            (row: UserRow, fn: Callback) => {
                getUserPrivacyPreferences(row, (err, is_admin) => {
                    if (err) return fn(err);
                    return fn(null, is_admin, row);
                });
            },
            (is_admin: number, id: string, fn: Callback) => {
                if(!canOtherViewFriends(is_admin)) 
                return fn(new ServerError(403, "You don't have permission to view this user's friends"));
                
                return fn(null, id);
            },
            (row: UserRow, fn: Callback) => {
                getFriends(row, (err, friends) => {
                    if(err) return fn(err);
                    return fn(null, friends);
                });
            },
        ],
        (error, friends) => {
            if (error) {
                if (error instanceof ServerError) return res.status(error.statusCode).send({ message: error.message }).end();
                return res.status(500).end();
            }
            return res.status(200).send({ friends }).end();
        }
    );
});

app.get('*', (req, res) => res.sendFile('index.html', { root: '.' }));
app.listen(3000, () => { console.log(`Page running on http://localhost:3000/`); });
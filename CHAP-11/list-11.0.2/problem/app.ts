import express from "express";
import sqlite from 'sqlite3';

import { UserRow, canOtherViewFriends, getFriends, getUserPrivacyPreferences } from "./utils";

export const db = new sqlite.Database('db.sql', err => {
    if(err) console.log('Error connection to database:', err.message);
});

const app = express();

app.get('/:name/friends', (req, res) => {
    const name = req.params.name;

    db.get(`SELECT id FROM users WHERE name = ?`, [name], (err, row: UserRow) => {
        if (err) return res.status(500).end();

        getUserPrivacyPreferences(row, (err, is_admin) => {
            if (err) return res.status(500).end();
            if (!canOtherViewFriends(is_admin)) {
                return res.status(403).send({ error: "You don't have permission to view this user's friends" }).end();
            } else {
                getFriends(row, (err, friends) => {
                    if (err) return res.status(500).end();
                    return res.status(200).send({ friends }).end();
                });
            }
        });
    });
});

app.get('*', (req, res) => res.sendFile('index.html', { root: '.' }));
app.listen(3000, () => {
    console.log(`Page running on http://localhost:3000/`);
});
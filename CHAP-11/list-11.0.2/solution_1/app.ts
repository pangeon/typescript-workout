import express from "express";
import sqlite from 'sqlite3';

import { UserRow, handleDatabaseResponse } from "./utils";

export const db = new sqlite.Database('../db.sql', err => {
    if(err) console.log('Error connection to database:', err.message);
});

const app = express();

app.get('/:name/friends', (req, res) => {
    const name = req.params.name;

    db.get(`SELECT id FROM users WHERE name = ?`, [name], (err, row: UserRow) => {
        handleDatabaseResponse(res, err, row);
    });
});

app.get('*', (req, res) => res.sendFile('index.html', { root: '.' }));

app.listen(3000, () => {
    console.log(`Page running on http://localhost:3000/`);
});
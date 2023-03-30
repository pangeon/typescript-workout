import { db } from './app';

db.run(`CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name text,
    email text UNIQUE,
    is_admin INTEGER DEFAULT 0 CHECK (is_admin IN (0, 1)),
    friends TEXT 
)`, err => {
    if (err) console.log('Database creation error:', err.message);
});

const users = [
    { name: 'Jan Kowalski', email: 'jan.kowalski@example.com', is_admin: 0, friends: 'Adam, Jan, Malwina' },
    { name: 'Adam Nowak', email: 'adam.nowak@example.com', is_admin: 1, friends: 'Stefan, Malwina, Kasia' },
    { name: 'Malwina Kowalczyk', email: 'malwina.kowalczyk@example.com', is_admin: 0, friends: 'Leon, Basia, Anna' },
    { name: 'Kasia Lewandowska', email: 'kasia.lewandowska@example.com', is_admin: 1, friends: 'Adam, Malwina, Anna' },
    { name: 'Anna Wójcik', email: 'anna.wojcik@example.com', is_admin: 0, friends: 'Sławomir, Leokadia, Żaneta' },
    { name: 'Marcin Zieliński', email: 'marcin.zielinski@example.com', is_admin: 0, friends: 'Adam, Ola, Piotr' },
    { name: 'Piotr Adamski', email: 'piotr.adamski@example.com', is_admin: 1, friends: 'Bogumił, Kazimierz, Anna' },
    { name: 'Alicja Szczepańska', email: 'alicja.szczepanska@example.com', is_admin: 0, friends: 'Anatol, Jerzy, Anna' },
    { name: 'Marta Czajkowska', email: 'marta.czajkowska@example.com', is_admin: 1, friends: 'Alojzy, Józef, Julia' },
    { name: 'Tomasz Kozłowski', email: 'tomasz.kozlowski@example.com', is_admin: 0, friends: 'Dobromił, Anna, Karina' }
  ];

users.forEach(user => {
    db.run(`INSERT INTO users(name, email, is_admin, friends) VALUES(?, ?, ?, ?)`, 
    [user.name, user.email, user.is_admin, user.friends], err => {
        if (err) {
            console.log('Database insert data error:', err.message);
        } else {
            console.log(`User ${user.name} was added to table.`);
        }
    });
});

db.all('SELECT * FROM users', [], (err, rows) => {
    (err) ? err : rows.forEach((row) => console.log(row)); 
});
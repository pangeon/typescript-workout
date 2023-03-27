import { db } from './app';

db.run(`CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name text,
    email text UNIQUE
)`, err => {
    if (err) console.log('Database creation error:', err.message);
});

const users = [
    { name: 'Jan Kowalski', email: 'jan.kowalski@example.com' },
    { name: 'Anna Nowak', email: 'anna.nowak@example.com' },
    { name: 'Adam Wiśniewski', email: 'adam.wisniewski@example.com' },
    { name: 'Marta Kaczmarek', email: 'marta.kaczmarek@example.com' },
    { name: 'Piotr Wojciechowski', email: 'piotr.wojciechowski@example.com' },
    { name: 'Aleksandra Czerwińska', email: 'aleksandra.czerwinska@example.com' },
    { name: 'Tomasz Lewandowski', email: 'tomasz.lewandowski@example.com' },
    { name: 'Karolina Malinowska', email: 'karolina.malinowska@example.com' },
    { name: 'Michał Pawlak', email: 'michal.pawlak@example.com' },
    { name: 'Katarzyna Szymańska', email: 'katarzyna.szymanska@example.com' },
];

users.forEach(user => {
    db.run(`INSERT INTO users(name, email) VALUES(?, ?)`, [user.name, user.email], err => {
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
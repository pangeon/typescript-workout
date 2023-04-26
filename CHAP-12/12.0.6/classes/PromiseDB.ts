import * as sqlite3 from 'sqlite3';

import { Database } from "sqlite";
import { PromiseModel } from "../interfaces/PromiseModel";


export class PromiseDB {
    private _db: Database;
    private _initlialized = false;
    constructor() {
        this._db = new Database({
            driver: sqlite3.Database,
            filename: ":memory",
        });
    }

    initialize = () => {    
        if(this._initlialized) {
            return Promise.resolve(true);
        }
        return this._db
            .open()
            .then(() =>
                    this._db
                    .run("CREATE TABLE IF NOT EXISTS promise (id INTEGER PRIMARY KEY, desc CHAR);")
                    .then(() => (this._initlialized = true)) 
            );
    }

    create = (payload: PromiseModel) => this._db.run("INSERT INTO promise (desc) VALUES (?);", payload.desc);
    delete = (id: number) => this._db.run("DELETE FROM promise WHERE id = ?", id);
    getAll = () => this._db.all<PromiseModel[]>("SELECT * FROM promise");
    getById = (id: number) => this._db.get<PromiseModel>("SELECT * FROM promise WHERE id = ?", id);
    update = (payload: PromiseModel) => this._db.run("UPDATE promise SET desc = ? WHERE id = ?", payload.desc, payload.id); 
}
import { PromiseDB } from "./classes/PromiseDB"

const api = new PromiseDB;
api.initialize();

api.create({id: 1, desc: "Python"});
api.create({id: 2, desc: "C"});
api.create({id: 3, desc: "Java"});
api.create({id: 4, desc: "C++"});
api.create({id: 5, desc: "C#"});
api.create({id: 6, desc: "Visual Basic"});
api.create({id: 7, desc: "JavaScript"});
api.create({id: 8, desc: "SQL"});
api.create({id: 9, desc: "PHP"});
api.create({id: 10, desc: "Go"});
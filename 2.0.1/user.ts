/// <reference path = "./types/AuthTypes.d.ts" />
import auth = require("AuthTypes");

let kamil: auth.User;
kamil = {
    email: "cecherz@outlook.com",
    roles: ["it specialist"]
};

let agnieszka: auth.User;
agnieszka = {
    email: "",
    roles: ["phone assistant"],
    source: "facebook"
}
console.log(kamil, agnieszka);



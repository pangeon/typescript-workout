import {Auth} from "./Auth";
import {Login} from "./Login";

const login_1 = new Login({email: 'kamil@cecherz.pl', password: 'top_secret_pass'});
const auth_1 = new Auth({user: login_1, source: 'it_data'});

const login_2 = new Login({email: 'admin@example.com', password: 'secret123'});
const auth_2 = new Auth({user: login_2, source: 'it_data'});

function printInfo(isValid: boolean): void {
    isValid ? console.log("Access granted") : console.log("Access denied") ;
}

printInfo(auth_1.validUser());
printInfo(auth_2.validUser());

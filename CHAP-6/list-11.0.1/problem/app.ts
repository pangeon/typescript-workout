/// <reference types="node" />
import * as http from "http"

const logger = (message: string) => console.log(`[${new Date().toISOString()}]: ${message}`);

const sendGreeting = (name: string) => {
    const now = Date.now();
    const duration = 5000;

    logger(`START: sendGreeting for user: ${name}`);
    while(Date.now() < now + duration);
    logger(`END: sendGreeting for user: ${name}`);

    return `Welcome, ${name}`;

}

http.createServer((req, res) => {
    logger(`START: ${req.url}`);

    const name = req.url!.split('/')[1]!;
    const greeting = sendGreeting(name);

    res.write(greeting);
    res.end();
    logger(`END: ${req.url}`);

}).listen(3000, () => {
    console.log(":: Server running on port 3000 ::");
}); 

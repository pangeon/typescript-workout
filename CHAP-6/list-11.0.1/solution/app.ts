/// <reference types="node" />
import * as http from "http"

const logger = (message: string) => console.log(`[${new Date().toISOString()}]: ${message}`);

const sendGreeting = (name: string, fn: (greeting: string) => void) => {
    const duration = 5000;

    logger(`START: sendGreeting for user: ${name}`);
    setTimeout(() => {
        logger(`-> GET greetings for user: ${name}`);
        fn(`Welcome, ${name}`);
    }, duration);
    logger(`END: sendGreeting for user: ${name}`);
}

http.createServer((req, res) => {
    logger(`START: ${req.url}`);
    const name = req.url!.split('/')[1]!;

    sendGreeting(name, greeting => {
        logger(`-> START: invoke callback for ${name}`);
        res.write(greeting);
        res.end();
        logger(`-> END: invoke callback for ${name}`);
    });    
    logger(`END: ${req.url}`);

}).listen(3000, () => {
    console.log(":: Server running on port 3000 ::");
}); 

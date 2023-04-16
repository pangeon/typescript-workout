import { Server, createServer, IncomingMessage, ServerResponse } from "http";

import { PromiseDB } from "./PromiseDB";
import { promiseRouter } from "../router";

class App {
    public db: PromiseDB;
    private _server: Server;

    constructor(private port: number) {
        this.db = new PromiseDB;
        this._server = createServer(this.requestHandler);
    }

    initialize = () => {
        return Promise.all([
            this.db.initialize(),
            new Promise(
                (resolve) => this._server
                    .listen(this.port, () => resolve(true)
                    )
                )
            ])
            .then(() => 
                console.log(`Application running on port: ${this.port}`)
            )
    }

    requestHandler = (req: IncomingMessage, res: ServerResponse) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Headers", "*");
        res.setHeader("Access-Control-Allow-Methods", "DELETE, GET, OPTIONS, POST, PUT");

        if (req.method === "OPTIONS") return res.end();

        const URL = req.url?.split('/') ?? '/';

        switch(URL[1]) {
            case 'promise':
                return promiseRouter(req, res);
            default:
                return this.hadleError(res, 404, "Page not found !");
        }
    }

    hadleError = (res: ServerResponse, statusCode = 500, message = "Internal server error") => 
    res.writeHead(statusCode).end(message);
    
}

export const app = new App(3000);




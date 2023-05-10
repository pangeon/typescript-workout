import { IncomingMessage, ServerResponse } from "http";

import { PromiseModel } from "./interfaces/PromiseModel";
import { app } from "./classes/App";

const parseBody = (req: IncomingMessage): Promise<PromiseModel> => {
    return new Promise((resolve, reject) => {
        let body = "";
        req.on("data", (chunk) => (body += chunk));
        req.on("end", () => {
            try {
                resolve(JSON.parse(body));
            } catch(error) {
                reject(error);
            }
        });
    });
}
const handleCreate = (req: IncomingMessage, res: ServerResponse) => {
    parseBody(req)
        .then((body) => app.db.create(body).then(() => res.end()))
        .catch((err) => app.hadleError(res, 500, err.message));
}

const handleDelete = (requestParam: number, res: ServerResponse) => {
    app.db
        .delete(requestParam)
        .then(() => res.end())
        .catch((err) => app.hadleError(res, 500, err.message));
}
const handleGetAll = (res: ServerResponse) => {
    app.db
        .getAll()
        .then((data) => res.end(JSON.stringify(data)))
        .catch((err) => app.hadleError(res, 500, err.message));
}

const handleGetById = (requestParam: number, res: ServerResponse) => {
    app.db
        .getById(requestParam)
        .then((data) => res.end(JSON.stringify(data)))
        .catch((err) => app.hadleError(res, 500, err.message));
}

const handleUpdate = (req: IncomingMessage, res: ServerResponse) => {
    parseBody(req)
        .then((body) => app.db.update(body).then(() => res.end()))
        .catch((err) => app.hadleError(res, 500, err.message));
}

export function promiseRouter(req: IncomingMessage, res: ServerResponse) {
    const URL = req.url?.split('/') ?? '/';
    const requestParam = URL[2];
    
    res.setHeader("Content-Type", "application/json");

    switch(req.method) {
        case "DELETE": if(requestParam) return handleDelete(Number.parseInt(requestParam), res);
        case "GET":
            if(requestParam) return handleGetById(Number.parseInt(requestParam), res);
            return handleGetAll(res);
        case "POST": return handleCreate(req, res);
        case "PUT": return handleUpdate(req, res);
        default: app.hadleError(res, 404, "Page not found !");
    }
}


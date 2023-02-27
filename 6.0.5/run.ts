import {HTTPErrors} from "./HTTPErrors";

const errorMassage: HTTPErrors = {
    400: 'Bad Request',
    401: 'Unauthorized',
    404: 'Not Found',
    500: 'Internal Server Error',
    503: 'Service Unavailable',
    apiVersion: 4
}

const errorCodes: number[] = [400, 401, 404, 500, 503];
errorCodes.forEach((code: number) => console.log(code, errorMassage[code]));
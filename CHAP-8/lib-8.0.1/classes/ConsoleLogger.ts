import { injectable } from "inversify";
import { Logger } from "../interfaces/Logger";


@injectable()
export class ConsoleLogger implements Logger {
    log(message: string, ...args: any[]): void { console.log('[LOG]', message, ...args) }
    warn(message: string, ...args: any[]): void { console.log('[WARN]', message, ...args) }
    error(message: string, ...args: any[]): void { console.log('[ERROR]', message, ...args) }
}
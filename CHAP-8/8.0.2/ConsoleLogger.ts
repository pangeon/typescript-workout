import { Logger } from "./Logger";
import { injectable } from "inversify";

@injectable()
export class ConsoleLogger implements Logger {
    log(message: string): void {
        console.log(message);
    }
}


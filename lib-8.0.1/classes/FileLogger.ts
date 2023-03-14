import * as fs from 'fs';
import { injectable } from "inversify";
import { Logger } from "../interfaces/Logger";

@injectable()
export class FileLogger implements Logger {
    private readonly loggerPath = 'calculator.log';
    
    log(message: string, ...args: any[]): void { this.logInternal('LOG', message, args) }
    
    warn(message: string, ...args: any[]): void { this.logInternal('WARN', message, args) }
    error(message: string, ...args: any[]): void { this.logInternal('ERROR', message, args) }
    
    logInternal(level: string, message: string, args: any[]) {
        fs.appendFileSync(this.loggerPath, this.logLineFormatter(level, message, args)); 
    }
    logLineFormatter(level: string, message: string, args: any[]): any {
        return `[${level}]: ${message}${args}\n`;
    }
}
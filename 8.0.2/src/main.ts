import { inject, injectable } from "inversify";
import "reflect-metadata"
import { Logger } from "../Logger";
import { TYPES } from "./types";
import { container } from "./ioc.config";

@injectable()
class Main {
    constructor(@inject(TYPES.Logger) private logger: Logger) {}

    run() {
        this.logger.log('Greetings from InversifyJS!');
    }
}

const main = container.resolve(Main);
main.run();
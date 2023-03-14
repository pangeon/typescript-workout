import { Container } from "inversify";
import { Operator } from "../interfaces/Operator";
import { TYPES } from "../const";
import * as Operators from "../classes/operators";
import { Calculator } from "../classes/Calculator";
import { Logger } from "../interfaces/Logger";
import { ConsoleLogger } from "../classes/ConsoleLogger";
import { FileLogger } from "../classes/FileLogger";


export const container = new Container();

Object.values(Operators).forEach(Operator => {
    container.bind<Operator>(TYPES.Operator).to(Operator);
});

container.bind(Calculator).toSelf();

//container.bind<Logger>(TYPES.Logger).to(ConsoleLogger);
container.bind<Logger>(TYPES.Logger).to(FileLogger);
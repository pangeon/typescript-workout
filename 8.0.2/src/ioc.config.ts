import { Container } from "inversify";
import { ConsoleLogger } from "../ConsoleLogger";
import { Logger } from "../Logger";
import { TYPES } from "./types";

export const container = new Container();
container.bind<Logger>(TYPES.Logger).to(ConsoleLogger);
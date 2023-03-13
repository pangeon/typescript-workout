import { Container } from "inversify";
import { Operator } from "../interfaces/Operator";
import { TYPES } from "../const";
import * as Operators from "../classes/operators";
import { Calculator } from "../classes/Calculator";


export const container = new Container();

Object.values(Operators).forEach(Operator => {
    container.bind<Operator>(TYPES.Operator).to(Operator);
});

container.bind(Calculator).toSelf();
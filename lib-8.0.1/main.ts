import 'reflect-metadata'

import { Calculator } from "./classes/Calculator";
import { container } from './config/ioc.config';

const calculator = container.get(Calculator);

try {
    const result = calculator.evaluate('13*10+20');
    console.log('Calculation result:', result);
} catch (err) {
    console.log(err);
}
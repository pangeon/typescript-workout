import { Injectable } from '@nestjs/common';
import { promises } from 'fs';
import { resolve } from 'path';

@Injectable()
export class AppService {
  async getHello(name: string): Promise<string> {
    await promises.appendFile(resolve(__dirname, 'names.txt'), `${name}\n`);
    return `Hello, ${name}!`;
  }
}

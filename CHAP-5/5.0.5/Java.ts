import {ProgrammingLang} from "./ProgrammingLang";

export class Java extends ProgrammingLang {
    isCompiledToByteCode: boolean = true;
    isCrossPlatform: boolean = true;

    constructor(firstYearAppeared: string) {
        super(true, false, false, firstYearAppeared);
    }

    chooseJDK(number: number): string {
        const jdk = ['Java SE 15', 'Java SE 16', 'Java SE 17'];
        return jdk[number];
    }
}
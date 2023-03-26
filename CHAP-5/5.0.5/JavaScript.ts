import {ProgrammingLang} from "./ProgrammingLang";

export class JavaScript extends ProgrammingLang {
    hasBrowserSupport: boolean = true;
    isInterpreted: boolean = true;

    constructor(firstYearAppeared: string) {
        super(false, false, false, firstYearAppeared);
    }

    setNewestVersion(version: string): boolean {
        return true;
    }
}
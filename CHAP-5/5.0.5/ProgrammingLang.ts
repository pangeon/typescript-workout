export class ProgrammingLang {
    hasStaticType: boolean;
    supportLowLevelProgramming: boolean;
    hasMultipleInheritance: boolean;
    firstYearAppeared: string;

    isEndSupport: boolean = false;
    isHighLevelLang: boolean = true;

    constructor(hasStaticType: boolean, supportLowLevelProgramming: boolean,
                hasMultipleInheritance: boolean, firstYearAppeared: string)
    {
        this.hasStaticType = hasStaticType;
        this.supportLowLevelProgramming = supportLowLevelProgramming;
        this.hasMultipleInheritance = hasMultipleInheritance;
        this.firstYearAppeared = firstYearAppeared;
    }

    endSupport(): void {
        this.isEndSupport ? this.isEndSupport = false : this.isEndSupport = true;
    }
    addNativeSupport(): void {
        this.isHighLevelLang = true;
    }
}
export class Report {
    private summaryCodingTime: number;
    private projectNames: string[];

    constructor(summaryCodingTime: number, projectNames: string[]) {
        this.summaryCodingTime = summaryCodingTime;
        this.projectNames = projectNames;
    }
}
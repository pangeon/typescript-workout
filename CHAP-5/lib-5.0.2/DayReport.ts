import {Commit} from "./Commit";
import {Report} from "./Report";

export class DayReport extends Report {
    private codingDate: number;
    private commitsAmountPerDay: number;
    private commitsDescriptions: Commit[];

    constructor(summaryCodingTime: number, projectNames: string[], codingDate: number, commitsAmountPerDay: number, commitsDescriptions: Commit[]) {
        super(summaryCodingTime, projectNames);
        this.codingDate = codingDate;
        this.commitsAmountPerDay = commitsAmountPerDay;
        this.commitsDescriptions = commitsDescriptions;
    }
}
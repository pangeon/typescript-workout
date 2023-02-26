export class StatisticUnitUsed {
    private recordName: string;
    private codingTime: number;

    constructor(recordName: string, codingTime: number) {
        this.recordName = recordName;
        this.codingTime = codingTime;
    }
}
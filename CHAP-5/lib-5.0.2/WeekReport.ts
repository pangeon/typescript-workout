import {StatisticUnitUsed} from "./StatisticUnitUsed";
import {Report} from "./Report";

export class WeekReport extends Report {
    private periodDate: string;
    private technologiesUsed: StatisticUnitUsed[];
    private toolsUsed: StatisticUnitUsed[];
    private systemUsed: StatisticUnitUsed[];
    private hostsUsed: StatisticUnitUsed[];

    constructor(summaryCodingTime: number,
                projectNames: string[],
                periodDate: string,
                technologiesUsed: StatisticUnitUsed[],
                toolsUsed: StatisticUnitUsed[],
                systemUsed: StatisticUnitUsed[],
                hostsUsed: StatisticUnitUsed[])
    {
        super(summaryCodingTime, projectNames);
        this.periodDate = periodDate;
        this.technologiesUsed = technologiesUsed;
        this.toolsUsed = toolsUsed;
        this.systemUsed = systemUsed;
        this.hostsUsed = hostsUsed;
    }
}
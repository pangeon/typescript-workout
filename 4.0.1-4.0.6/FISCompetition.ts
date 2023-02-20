import {SkiJumpTeam} from "./SkiJumpTeam";
import {IFISCompetition} from "./interfaces/IFISCompetition";

export class FISCompetition {
    private readonly participatingTeams: SkiJumpTeam[];
    private readonly eventPlace: string;
    private readonly date: string;

    constructor(args: IFISCompetition) {
        this.participatingTeams = args.participatingTeams;
        this.eventPlace = args.eventPlace
        this.date = args.date;
    }

    getInfoAboutCompetitionAsHTML(): string {
        let teamComposition: string = "";

        this.participatingTeams.map((value) => teamComposition += value.generateHTML());

        return `
        <h1>${this.date}</h1>
        <h2>${this.eventPlace}</h2>
        <div>${teamComposition}</div>
        `;
    }
}
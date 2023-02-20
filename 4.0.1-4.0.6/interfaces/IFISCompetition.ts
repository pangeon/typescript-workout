import {SkiJumpTeam} from "../SkiJumpTeam";

export interface IFISCompetition {
    participatingTeams: SkiJumpTeam[];
    eventPlace: string;
    date: string;
}
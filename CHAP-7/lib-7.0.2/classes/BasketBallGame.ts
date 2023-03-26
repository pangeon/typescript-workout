
import { Authenticate, Timer, Audit, Validate, BasketBallPoints } from "../decorators/BasketBallClassDecorators";
import { Team } from "../interfaces/Team";

@Authenticate("canUpdateScore")
export class BasketBallGame {
    private visitingTeam: Team;
    private homeTeam: Team;

    constructor(visitingTeam: string, homeTeam: string) {
        this.visitingTeam = {score: 0, name: visitingTeam};
        this.homeTeam = {score: 0, name: homeTeam};
    }

    public getScore(): string {
        return `${this.visitingTeam.score}:${this.homeTeam.score}`;
    };

    @Timer()
    @Audit("Upgrade score")
    @Validate()
    public updateScore(@BasketBallPoints points: number, isHomeTeam: boolean): void {
        isHomeTeam ? this.homeTeam.score += points : this.visitingTeam.score += points;
    };
}
Reflect.defineMetadata("permissions", ["canUpdateScore"], BasketBallGame);





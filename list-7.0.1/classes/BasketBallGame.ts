import {Team} from "../interfaces/Team";

function isAuthorized(login: string, password: string): boolean {
    return login === "admin" && password === "123pass";
}

function checkPoints(updateScore: string, points: number, isHomeTeam: boolean): boolean {
    return true;
}

function validatePoints(points: number): boolean {
   return (points === 1 || points === 2 || points === 3);
}

function logDuration(funcName: string, start: number, end: number): void {
    console.log(funcName, end - start);
}

function loadMemory() {
    let x: number[] = [];
    for (let i = 0; i < 10000000; i++) {
        x.push(i);
    }
}

function timeCounter(func: Function): Function {
    const result = {
        [func.name]: function (this: any, ...args: any[]) {
            const start: number = Date.now();
            const result: any = func.apply(this, args);
            const end: number = Date.now();
            logDuration(func.name, start, end);
            return result;
        },
    };
    return result[func.name];
}

export class BasketBallGame {
    private visitingTeam: Team;
    private homeTeam: Team;

    constructor(visitingTeam: string, homeTeam: string) {
        this.visitingTeam = {score: 0, name: visitingTeam};
        this.homeTeam = {score: 0, name: homeTeam};
    }

    getScore = (): string => `${this.visitingTeam.score}:${this.homeTeam.score}`;

    updateScore = (points: number, isHomeTeam: boolean): void => {
        checkPoints("updateScore", points, isHomeTeam);
        const start = Date.now();
        loadMemory();
        if(isAuthorized("admin", "123pass")) {
                if(validatePoints(points)) {
                    isHomeTeam ? this.homeTeam.score += points : this.visitingTeam.score += points;
                } else {
                    console.log(`Invalid point value: ${points}`);
                }
            } else {
                console.log("You do not have authorization it changes as a result.");
            }
            const end = Date.now();
            logDuration("updateScore", start, end);
    };

}
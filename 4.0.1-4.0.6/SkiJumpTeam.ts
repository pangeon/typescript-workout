import {ISkiJumpTeam} from "./interfaces/ISkiJumpTeam";

export class SkiJumpTeam {
    private readonly nationName: string;
    private readonly jumpers: string[];

    constructor(args: ISkiJumpTeam) {
        this.nationName = args.nationName;
        this.jumpers = args.jumpers;
    }

    getTeamName(): string {
        return this.nationName;
    }

    startList(): string {
        return this.jumpers.join(", ");
    }
    generateHTML(): string {
        const jumpersWithNum = this.jumpers.map((jumper, num) => {
            return `<li>${num + 1} - ${jumper}</li>`
        });
        return `<h1>${this.nationName}</h1><ul>${jumpersWithNum.join("")}</ul>`;
    }
}

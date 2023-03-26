import {SkiJumpTeam} from "./SkiJumpTeam";
import {FISCompetition} from "./FISCompetition";

const polishJumpers = ["Stoch", "Żyła", "Kubacki", "Pilch", "Wolny"];
const norwegianJumpers = ["Granerud", "Johansson", "Tande", "Forfang", "Stjernen"];
const polishTeam = new SkiJumpTeam({nationName: "Polish Team", jumpers: polishJumpers});
const norwegianTeam = new SkiJumpTeam({nationName: "Norwegian Team", jumpers: norwegianJumpers});

const rasnovSkiJump = new FISCompetition(
    {participatingTeams: [polishTeam, norwegianTeam], eventPlace: 'Rasnov, Romania', date: '2023-02-19'});

console.log(rasnovSkiJump.getInfoAboutCompetitionAsHTML());





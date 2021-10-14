import {Match} from "./match";

export class Team {
  id;
  teamName;
  totalMatches;
  totalWins;
  matches: any[];
  fullDetailMatch: Match;
  limitedDetailMatch: Match[];
}

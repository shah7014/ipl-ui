import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Match} from "../model/match";

@Component({
  selector: 'app-match-limited-detail',
  templateUrl: './match-limited-detail.component.html',
  styleUrls: ['./match-limited-detail.component.css']
})
export class MatchLimitedDetailComponent implements OnInit, OnChanges {
  backgroundColorClass;

  @Input()
  match: Match;

  @Input()
  primaryTeam: string;

  opponentTeam: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    const team1 = this.match.team1;
    const team2 = this.match.team2;
    this.opponentTeam = team1 === this.primaryTeam ? team2 : team1;
    this.backgroundColorClass = this.match.matchWinner === this.primaryTeam ? 'green' : 'red';
  }

}

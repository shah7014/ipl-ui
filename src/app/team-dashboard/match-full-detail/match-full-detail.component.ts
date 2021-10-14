import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Match} from "../model/match";

@Component({
  selector: 'app-match-full-detail',
  templateUrl: './match-full-detail.component.html',
  styleUrls: ['./match-full-detail.component.css']
})
export class MatchFullDetailComponent implements OnInit, OnChanges {
  backgroundColorClass;

  @Input()
  latestMatch: Match;

  @Input()
  primaryTeam: string;

  opponentTeam: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    const team1 = this.latestMatch.team1;
    const team2 = this.latestMatch.team2;
    this.opponentTeam = team1 === this.primaryTeam ? team2 : team1;
    this.backgroundColorClass = this.latestMatch.matchWinner === this.primaryTeam ? 'green' : 'red';
  }

}

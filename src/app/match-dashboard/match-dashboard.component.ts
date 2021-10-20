import { Component, OnInit } from '@angular/core';
import {DashboardService} from "../dashboard.service";
import {ActivatedRoute} from "@angular/router";
import {catchError, map, switchMap, tap} from "rxjs/operators";
import {EMPTY, Observable} from "rxjs";
import {Match} from "../team-dashboard/model/match";

@Component({
  selector: 'app-match-dashboard',
  templateUrl: './match-dashboard.component.html',
  styleUrls: ['./match-dashboard.component.css']
})
export class MatchDashboardComponent implements OnInit {
  error;
  primaryTeam;
  year;

  constructor(private matchService: DashboardService, private route: ActivatedRoute) { }

  params$ = this.route.paramMap.pipe(
    map(params => ({teamName: params.get('teamName'), year: params.get('matchYear')})),
    tap(data => {
      this.primaryTeam = data.teamName;
      this.year = data.year;
    })
  );

  matches$: Observable<Match[]> = this.params$.pipe(
    switchMap(({teamName, year}) => this.matchService.getMatchesForTeamAndYear(teamName, year)),
    tap(data => this.error = null),
    catchError(err => this.handleError(err))
  );

  ngOnInit(): void {
  }

  private handleError(err) {
    this.error = err;
    return EMPTY;
  }

}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EMPTY, Observable} from 'rxjs';
import {catchError, map, switchMap, tap} from "rxjs/operators";
import {DashboardService} from "../dashboard.service";
import {Team} from "./model/teamInfo";


@Component({
  selector: 'app-team-dashboard',
  templateUrl: './team-dashboard.component.html',
  styleUrls: ['./team-dashboard.component.css']
})
export class TeamDashboardComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private teamService: DashboardService) {
  }
  startYear = 2020;

  error = null;

  teamName$ = this.activatedRoute.paramMap.pipe(
    map(params => params.get('teamName'))
  );

  team$:Observable<Team> = this.teamName$.pipe(
    switchMap(teamName => this.teamService.getTeam(teamName)),
    map(teamInfo => ({...teamInfo, fullDetailMatch: teamInfo.matches[0], limitedDetailMatch: teamInfo.matches.slice(1)})),
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

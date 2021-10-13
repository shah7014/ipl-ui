import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Observable } from 'rxjs';
import {map, switchMap, tap} from "rxjs/operators";
import {TeamDashboardService} from "./team-dashboard.service";
import {Team} from "./model/teamInfo";


@Component({
  selector: 'app-team-dashboard',
  templateUrl: './team-dashboard.component.html',
  styleUrls: ['./team-dashboard.component.css']
})
export class TeamDashboardComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private teamService: TeamDashboardService) {
  }

  teamName$ = this.activatedRoute.paramMap.pipe(
    map(params => params.get('teamName'))
  );

  team$:Observable<Team> = this.teamName$.pipe(
    switchMap(teamName => this.teamService.getTeam(teamName)),
    tap(console.log)
  );

  ngOnInit(): void {
  }

}

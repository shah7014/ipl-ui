import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {catchError} from "rxjs/operators";
import {EMPTY, Observable, of, throwError} from "rxjs";
import {Team} from "./team-dashboard/model/teamInfo";
import {Match} from "./team-dashboard/model/match";


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }


  getTeam(teamName): Observable<Team> {
    return this.http.get<Team>(`${environment.api}team/${teamName}`).pipe(
      catchError(err => this.handleError(err))
    )
  }

  getMatchesForTeamAndYear(teamName, year): Observable<Match[]> {
    return this.http.get<Match[]>(`${environment.api}team/${teamName}/matches`, {params: {year: year}}).pipe(
      catchError(err => this.handleError(err))
    );
  }

  getAllTeams(): Observable<string[]> {
    return this.http.get<string[]>(`${environment.api}team/allteams`).pipe(
      catchError(err => this.handleError(err))
    )
  }

  private handleError(err) {
    console.log('err:- ', err);
    return throwError(err);
  }
}

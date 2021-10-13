import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError} from "rxjs/operators";
import {EMPTY} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TeamDashboardService {

  constructor(private http: HttpClient) { }


  getTeam(teamName) {
    return this.http.get(`${environment.api}team/${teamName}`).pipe(
      catchError(err => this.handleError(err))
    )
  }

  private handleError(err) {
    console.log('err:- ', err);
    return EMPTY;
  }
}

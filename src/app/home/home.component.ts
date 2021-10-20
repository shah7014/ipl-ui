import { Component, OnInit } from '@angular/core';
import {DashboardService} from "../dashboard.service";
import {catchError, tap} from "rxjs/operators";
import {EMPTY} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  error = null;

  constructor(private teamService: DashboardService) { }

  teamNames$ = this.teamService.getAllTeams().pipe(
    tap(data => this.error = null),
    catchError(err => this.handleError(err))
  )

  ngOnInit(): void {
  }

  private handleError(err) {
    this.error = err;
    return EMPTY;
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamDashboardComponent } from './team-dashboard/team-dashboard.component';
import {HttpClientModule} from "@angular/common/http";
import { MatchFullDetailComponent } from './team-dashboard/match-full-detail/match-full-detail.component';
import { MatchLimitedDetailComponent } from './team-dashboard/match-limited-detail/match-limited-detail.component';
import { MatchDashboardComponent } from './match-dashboard/match-dashboard.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamDashboardComponent,
    MatchFullDetailComponent,
    MatchLimitedDetailComponent,
    MatchDashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

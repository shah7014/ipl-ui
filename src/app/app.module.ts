import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TeamDashboardComponent} from './team-dashboard/team-dashboard.component';
import {HttpClientModule} from "@angular/common/http";
import {MatchFullDetailComponent} from './team-dashboard/match-full-detail/match-full-detail.component';
import {MatchLimitedDetailComponent} from './team-dashboard/match-limited-detail/match-limited-detail.component';
import {MatchDashboardComponent} from './match-dashboard/match-dashboard.component';
import {HomeComponent} from './home/home.component';
import {PieChartComponent} from './chart/pie-chart/pie-chart.component';
import {PieChartModule} from "@swimlane/ngx-charts";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    TeamDashboardComponent,
    MatchFullDetailComponent,
    MatchLimitedDetailComponent,
    MatchDashboardComponent,
    HomeComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PieChartModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

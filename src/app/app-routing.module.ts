import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeamDashboardComponent} from "./team-dashboard/team-dashboard.component";
import {MatchDashboardComponent} from "./match-dashboard/match-dashboard.component";

const routes: Routes = [
  {path: 'teams/:teamName', component: TeamDashboardComponent},
  {path: 'teams/:teamName/matches/:matchYear', component: MatchDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

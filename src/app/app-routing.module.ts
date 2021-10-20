import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeamDashboardComponent} from "./team-dashboard/team-dashboard.component";
import {MatchDashboardComponent} from "./match-dashboard/match-dashboard.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'teams/:teamName', component: TeamDashboardComponent},
  {path: 'teams/:teamName/matches/:matchYear', component: MatchDashboardComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

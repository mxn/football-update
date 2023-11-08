import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { TeamStandingsComponent } from "../team-standings/team-standings.component";
import { TeamGameResultsComponent } from "../team-game-results/team-game-results.component";


const routes: Routes = [
  {
    path: 'team-standings/:country',
    component: TeamStandingsComponent
  },
  {
    path: 'team-game-results/:teamId',
    component: TeamGameResultsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {
}

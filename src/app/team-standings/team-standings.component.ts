import { Component, Input, OnInit } from '@angular/core';
import { FootballService } from "../football.service";
import { Observable } from "rxjs";
import { TeamStanding } from "../team-standing";

@Component({
  selector: 'app-team-standings',
  templateUrl: './team-standings.component.html',
  styleUrls: ['./team-standings.component.css']
})
export class TeamStandingsComponent {
  @Input()
  country: string = '';
  constructor(private footballService: FootballService) {
  }

  getTeamStanding(): Observable<TeamStanding[]> {
    return this.footballService.getTeamStandings(this.country);
  }
}

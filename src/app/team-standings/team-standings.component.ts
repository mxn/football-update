import { Component, Input, OnInit } from '@angular/core';
import { FootballService } from "../football.service";
import { Observable } from "rxjs";
import { TeamStanding } from "../team-standing";

@Component({
  selector: 'app-team-standings',
  templateUrl: './team-standings.component.html',
  styleUrls: ['./team-standings.component.css']
})
export class TeamStandingsComponent implements OnInit{
  @Input()
  leagueId: string = '';
  teamStandings$!: Observable<TeamStanding[]>;
  constructor(private footballService: FootballService) {
  }

  ngOnInit(): void {
    this.teamStandings$ = this.footballService.getTeamStandings(Number(this.leagueId));
  }
}

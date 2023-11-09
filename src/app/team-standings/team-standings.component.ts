import { Component, Input, OnInit } from '@angular/core';
import { FootballService } from "../football.service";
import { TeamStanding } from "../team-standing";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-team-standings',
  templateUrl: './team-standings.component.html',
  styleUrls: ['./team-standings.component.css']
})
export class TeamStandingsComponent implements OnInit {
  @Input()
  country: string = '';
  teamStandings: TeamStanding[] = []

  constructor(private footballService: FootballService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    console.log(`TeamStandings ngOnInit, country: ${this.country}`)
    this.country = this.activatedRoute.snapshot.paramMap.get('country')!;
    console.log(`TeamStandings ngOnInit after snapshot, country: ${this.country}`)
    this.footballService.getTeamStandings$(this.country).subscribe(
      teamStandings => this.teamStandings = teamStandings);
  }
}

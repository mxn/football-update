import { Component, OnInit } from '@angular/core';
import { FootballService } from "../football.service";
import { TeamStanding } from "../team-standing";
import { ActivatedRoute } from "@angular/router";
import { filter, map, mergeMap, tap } from "rxjs";

@Component({
  selector: 'app-team-standings',
  templateUrl: './team-standings.component.html',
  styleUrls: ['./team-standings.component.css']
})
export class TeamStandingsComponent implements OnInit {
  teamStandings: TeamStanding[] = [];
  country: string = '';

  constructor(private footballService: FootballService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap
      .pipe(
        map(paramMap => paramMap.get('country')),
        tap(country => console.log('route to country: ' + country)),
        tap(country => this.country = country!),
        filter(country => country != ''),
        mergeMap(country => this.footballService.getTeamStandings$(country!))
      )
      .subscribe(teamStandings => this.teamStandings = teamStandings);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FootballService } from "../football.service";
import { Observable } from "rxjs";
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

  constructor(private footballService: FootballService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap
      .subscribe(paramMap => this.country = paramMap.get('country')!);
  }

  getTeamStanding(): Observable<TeamStanding[]> {
    return this.footballService.getTeamStandings(this.country);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { GameResult } from "../game-result";
import { FootballService } from "../football.service";
import { map, mergeMap, tap } from "rxjs";

@Component({
  selector: 'app-team-game-results',
  templateUrl: './team-game-results.component.html',
  styleUrls: ['./team-game-results.component.css']
})
export class TeamGameResultsComponent implements OnInit {
  @Input()
  country: string = '';
  gameResults: GameResult[] = [];

  constructor(private footballService: FootballService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      tap(paramMap => this.country = paramMap.get('country')!),
      map(paramMap => Number(paramMap.get('teamId'))),
      mergeMap(teamId => this.footballService.getTeamGameResults$(teamId))
    ).subscribe(gameResults => this.gameResults = gameResults);
  }


}

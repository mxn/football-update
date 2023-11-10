import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { GameResult } from "../game-result";
import { FootballService } from "../football.service";
import { mergeMap, tap } from "rxjs";

@Component({
  selector: 'app-team-game-results',
  templateUrl: './team-game-results.component.html',
  styleUrls: ['./team-game-results.component.css']
})
export class TeamGameResultsComponent implements OnInit {
  @Input()
  country: string = '';
  gameResults: GameResult[] | null = null;

  constructor(private footballService: FootballService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      tap(_ => this.gameResults = null),
      tap(paramMap => this.country = paramMap.get('country')!),
      mergeMap(paramMap => this.footballService.getTeamGameResults$(
        paramMap.get('country')!, Number(paramMap.get('teamId'))))
    ).subscribe(gameResults => this.gameResults = gameResults);
  }


}

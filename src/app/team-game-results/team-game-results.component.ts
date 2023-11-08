import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { GameResult } from "../game-result";
import { FootballService } from "../football.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-team-game-results',
  templateUrl: './team-game-results.component.html',
  styleUrls: ['./team-game-results.component.css']
})
export class TeamGameResultsComponent implements OnInit {
  @Input()
  country: string = '';
  private teamId!: number;
  gameResults$: Observable<GameResult[]> = new Observable();

  constructor(private footballService: FootballService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => this.teamId = Number(paramMap.get('teamId')));
    this.gameResults$ = this.footballService.getTeamGameResults(this.teamId);
  }


}

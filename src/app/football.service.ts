import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { TeamStanding } from "./team-standing";
import { TeamStandingsComponent } from "./team-standings/team-standings.component";

@Injectable({
  providedIn: 'root'
})
export class FootballService {
  private apiKey: string = '8f6f7b3d8164aa2f52afdf308e691f95';
  private apiEndPoint: string = 'https://v3.football.api-sports.io/'
  private countryLeagueMapping;

  constructor() {
    this.countryLeagueMapping = {
      'England': 39,
      'Spain': 140,
      'France': 61,
      'Germany': 78,
      'Italy': 135
    }
  }

  getTeamStandings(leagueId: number): Observable<TeamStanding[]> {
    return of(testTeams);
  }
}


const testTeams: TeamStanding[] = [
  {
    name: 'aha',
    logoUrl: 'hi',
    games: 20,
    wins: 10,
    draws: 1,
    losses: 2,
    goalDifference: 1,
    points: 1,
  },
  {
    name: 'uhu',
    logoUrl: 'bye',
    games: 15,
    wins: 10,
    draws: 1,
    losses: 2,
    goalDifference: 1,
    points: 1,
  }
]


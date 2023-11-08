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

  getTeamStandings(country: string): Observable<TeamStanding[]> {
    let leagueId: number = this.getLeagueId(country);
    if ([39, 148].includes(leagueId)) {
      return of(testTeams1);
    }
    return of(testTeams2);
  }
  getLeagueId(country: string): number {
    return countryLeagueMapping[country];
  }
}

const countryLeagueMapping: {[index: string]:any}  =
  {
    'england': 39,
    'spain': 140,
    'france': 61,
    'germany': 78,
    'italy': 135
  }

const testTeams1: TeamStanding[] = [
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

const testTeams2: TeamStanding[] = [
  {
    name: 'FR',
    logoUrl: 'BR',
    games: 20,
    wins: 10,
    draws: 1,
    losses: 2,
    goalDifference: 1,
    points: 1,
  },
  {
    name: 'EN',
    logoUrl: 'GB',
    games: 15,
    wins: 10,
    draws: 1,
    losses: 2,
    goalDifference: 1,
    points: 1,
  }
]


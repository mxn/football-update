import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { TeamStanding } from "./team-standing";
import { TeamStandingsComponent } from "./team-standings/team-standings.component";
import { GameResult } from "./game-result";

@Injectable({
  providedIn: 'root'
})
export class FootballService {
  private apiKey: string = '8f6f7b3d8164aa2f52afdf308e691f95';
  private apiEndPoint: string = 'https://v3.football.api-sports.io/'

  getTeamStandings(country: string): Observable<TeamStanding[]> {
    let leagueId: number = this.getLeagueId(country);
    if ([39, 148].includes(leagueId)) {
      return of(this.toTeamStandings(fake_standing_response)); // TODO
    }
    return of(testTeams2);
  }

  toTeamStandings(response: any): TeamStanding[] {
    return response.response[0].league.standings[0].map((teamEl: any)  => ({
      id: teamEl.team.id,
      name: teamEl.team.name,
      logoUrl: teamEl.team.logo,
      games: teamEl.all.played,
      wins: teamEl.all.win,
      losses: teamEl.all.lose,
      draws: teamEl.all.draw,
      goalDifference: teamEl.goalsDiff,
      points: teamEl.points,
    }));
  }

  toGameResults(response: any): GameResult[] {
    return response.response.map((fixtureEl: any) => (
      {homeTeamName: fixtureEl.teams.home.name,
        homeTeamLogoUrl: fixtureEl.teams.home.logo,
        homeTeamGoals: fixtureEl.goals.home,
        awayTeamName: fixtureEl.teams.away.name,
        awayTeamLogoUrl: fixtureEl.teams.away.logo,
        awayTeamGoals: fixtureEl.goals.away
      }
    ))
  }

  getLeagueId(country: string): number {
    return countryLeagueMapping[country];
  }

  getTeamLogoUrl(teamId: number) {
    return `https://media.api-sports.io/football/teams/${teamId}.png`
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
    id: 38,
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
    id: 27,
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
    id: 28,
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
    id: 27,
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

const fake_standing_response = {
  "get": "standings",
  "parameters": {
  "league": "39",
    "season": "2019"
},
  "errors": [],
  "results": 1,
  "paging": {
  "current": 1,
    "total": 1
},
  "response": [
  {
    "league": {
      "id": 39,
      "name": "Premier League",
      "country": "England",
      "logo": "https://media.api-sports.io/football/leagues/2.png",
      "flag": "https://media.api-sports.io/flags/gb.svg",
      "season": 2019,
      "standings": [
        [
          {
            "rank": 1,
            "team": {
              "id": 40,
              "name": "Liverpool",
              "logo": "https://media.api-sports.io/football/teams/40.png"
            },
            "points": 70,
            "goalsDiff": 41,
            "group": "Premier League",
            "form": "WWWWW",
            "status": "same",
            "description": "Promotion - Champions League (Group Stage)",
            "all": {
              "played": 24,
              "win": 23,
              "draw": 1,
              "lose": 0,
              "goals": {
                "for": 56,
                "against": 15
              }
            },
            "home": {
              "played": 12,
              "win": 12,
              "draw": 0,
              "lose": 0,
              "goals": {
                "for": 31,
                "against": 9
              }
            },
            "away": {
              "played": 12,
              "win": 11,
              "draw": 1,
              "lose": 0,
              "goals": {
                "for": 25,
                "against": 6
              }
            },
            "update": "2020-01-29T00:00:00+00:00"
          }
        ]
      ]
    }
  }
]
}


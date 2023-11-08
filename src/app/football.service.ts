import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { TeamStanding } from "./team-standing";
import { GameResult } from "./game-result";
import { fake_standing_response, fake_standings_response_1 } from "./fake_standing_response";
import { fake_team_response } from "./fake_team_fixture_response";

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
    return of(fake_standings_response_1);
  }

  toTeamStandings(response: any): TeamStanding[] {
    return response.response[0].league.standings[0].map((teamEl: any) => ({
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
      {
        homeTeamName: fixtureEl.teams.home.name,
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

  getTeamGameResults(teamId: number): Observable<GameResult[]> {
    return of(this.toGameResults(fake_team_response));
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




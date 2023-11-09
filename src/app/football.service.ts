import { Injectable } from '@angular/core';
import { map, mergeMap, Observable, of, tap } from "rxjs";
import { TeamStanding } from "./team-standing";
import { GameResult } from "./game-result";
import { fake_team_response } from "./test_data/fake_team_fixture_response";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { fake_standing_response, fake_team_standing_1 } from "./test_data/fake_standing_response";

@Injectable({
  providedIn: 'root'
})
export class FootballService {
  private apiKey: string = '8f6f7b3d8164aa2f52afdf308e691f95';
  private httpHeaders: HttpHeaders = new HttpHeaders(
    {'x-rapidapi-key': this.apiKey}
  )
  private apiEndPoint: string = 'https://v3.football.api-sports.io/';
  private activeSeasonCache: { [index: number]: number } = {};
  private teamStandingsCache: { [index: number]: TeamStanding[] } = {};
  private teamGameResultsCache: { [index: number]: GameResult[] } = {};


  constructor(private httpClient: HttpClient) {
  }

  getTeamStandings$(country: string): Observable<TeamStanding[]> {
    if (country == 'england') { //TODO
      return of(this.toTeamStandings(fake_standing_response));
    }
    return of(fake_team_standing_1);
    let leagueId = this.getLeagueId(country);
    if (this.teamStandingsCache[leagueId]) {
      console.log(`cache hit for league ${leagueId}`);
      return of(this.teamStandingsCache[leagueId])
    }
    return this.getActiveSeason$(leagueId)
      .pipe(
        mergeMap(season => this.getTeamStandingForLeagueSeason$(leagueId, season)),
        tap(teamStandings => this.teamStandingsCache[leagueId] = teamStandings)
      );
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

  getTeamGameResults$(teamId: number): Observable<GameResult[]> {
    return of(this.toGameResults(fake_team_response));
  }

  getActiveSeason$(leagueId: number): Observable<number> {
    if (this.activeSeasonCache[leagueId]) {
      return of(this.activeSeasonCache[leagueId]);
    }
    return this.httpClient.get<any>(`${this.apiEndPoint}leagues`,
      {
        headers: this.httpHeaders,
        params: new HttpParams().set('id', leagueId).set('current', true)
      }).pipe(tap(response => console.log(response)),
      map(response => this.getActiveSeasonFromResponse(response)),
      tap(season => this.activeSeasonCache[leagueId])
    );
  }

  getActiveSeasonFromResponse(seasonResponse: any): number {
    return seasonResponse.response[0].seasons[0].year;
  }

  getCoutries() {
    return Object.keys(countryLeagueMapping).map(country => country.slice(0, 1).toUpperCase() + country.slice(1))
  }

  private getTeamStandingForLeagueSeason$(leagueId: number, season: number) {
    return this.httpClient.get<any>(`${this.apiEndPoint}standings`,
      {
        headers: this.httpHeaders,
        params: new HttpParams().set('league', leagueId).set('season', season)
      }).pipe(tap(res => console.log(res)),
      map(response => this.toTeamStandings(response)),
    );
  }
}

const countryLeagueMapping: { [index: string]: any } =
  {
    'england': 39,
    'spain': 140,
    'france': 61,
    'germany': 78,
    'italy': 135
  }

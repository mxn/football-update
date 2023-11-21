import { Injectable } from '@angular/core';
import { map, mergeMap, Observable, of, tap } from "rxjs";
import { TeamStanding } from "./team-standing";
import { GameResult } from "./game-result";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { StandingResponse, TeamStandingsResponse } from "./team-standings-response";
import { Fixture, FixturesResponse } from "./fixtures-response";
import { apiKey } from "../.secrets";

@Injectable({
  providedIn: 'root'
})
export class FootballService {
  private httpHeaders: HttpHeaders = new HttpHeaders(
    {'x-rapidapi-key': apiKey}
  )
  private apiEndPoint: string = 'https://v3.football.api-sports.io/';
  private activeSeasonCache: { [index: number]: number } = {};
  private teamStandingsCache: { [index: number]: TeamStanding[] } = {};
  private teamGameResultsCache: { [index: number]: GameResult[] } = {};


  constructor(private httpClient: HttpClient) {
  }

  getTeamStandings$(country: string): Observable<TeamStanding[]> {
    let leagueId = this.getLeagueId(country);
    if (!leagueId) {
      throw new Error(`leagueId is undefined for country ${country}`);
    }
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

  toTeamStandings(response: TeamStandingsResponse): TeamStanding[] {
    return response.response[0].league.standings[0].map((standingResponse: StandingResponse) => ({
      id: standingResponse.team.id,
      name: standingResponse.team.name,
      logoUrl: standingResponse.team.logo,
      games: standingResponse.all.played,
      wins: standingResponse.all.win,
      losses: standingResponse.all.lose,
      draws: standingResponse.all.draw,
      goalDifference: standingResponse.goalsDiff,
      points: standingResponse.points,
    }));
  }

  toGameResults(response: FixturesResponse): GameResult[] {
    return response.response.map((fixture: Fixture) => (
      {
        homeTeamName: fixture.teams.home.name,
        homeTeamLogoUrl: fixture.teams.home.logo,
        homeTeamGoals: fixture.goals.home,
        awayTeamName: fixture.teams.away.name,
        awayTeamLogoUrl: fixture.teams.away.logo,
        awayTeamGoals: fixture.goals.away
      }
    ))
  }

  getLeagueId(country: string): number {
    return countryLeagueMapping[country.toLowerCase()];
  }

  getTeamGameResults$(country: string, teamId: number): Observable<GameResult[]> {
    if (this.teamGameResultsCache[teamId]) {
      return of(this.teamGameResultsCache[teamId]);
    }
    let leagueId = this.getLeagueId(country);
    return this.getActiveSeason$(leagueId)
      .pipe(mergeMap(season => this.getTeamResultLeagueSeasonTeam$(leagueId, season, teamId)),
        tap(gameResults => this.teamGameResultsCache[teamId] = gameResults));
  }

  getTeamResultLeagueSeasonTeam$(league: number, season: number, teamId: number): Observable<GameResult[]> {
    return this.httpClient.get<FixturesResponse>(`${this.apiEndPoint}fixtures`,
      {
        headers: this.httpHeaders,
        params: new HttpParams().set('league', league).set('season', season).set('team', teamId).set('last', 10)
      }).pipe(
      tap(response => console.log(response)),
      map(response => this.toGameResults(response))
    )
  }

  getActiveSeason$(leagueId: number): Observable<number> {
    if (this.activeSeasonCache[leagueId]) {
      return of(this.activeSeasonCache[leagueId]);
    }
    return this.httpClient.get<SeasonResponse>(`${this.apiEndPoint}leagues`,
      {
        headers: this.httpHeaders,
        params: new HttpParams().set('id', leagueId).set('current', true)
      }).pipe(tap(response => console.log(response)),
      map(response => this.getActiveSeasonFromResponse(response)),
      tap(season => this.activeSeasonCache[leagueId] = season)
    );
  }

  getActiveSeasonFromResponse(seasonResponse: SeasonResponse): number {
    return seasonResponse.response[0].seasons[0].year;
  }

  getCountries() {
    return Object.keys(countryLeagueMapping).map(country => country.slice(0, 1).toUpperCase() + country.slice(1))
  }

  private getTeamStandingForLeagueSeason$(leagueId: number, season: number) {
    return this.httpClient.get<TeamStandingsResponse>(`${this.apiEndPoint}standings`,
      {
        headers: this.httpHeaders,
        params: new HttpParams().set('league', leagueId).set('season', season)
      }).pipe(tap(res => console.log(res)),
      map(response => this.toTeamStandings(response)),
    );
  }
}

interface SeasonResponse {
  response:
    {
      seasons: {
        year: number
      }[]
    }[]
}


const countryLeagueMapping: { [index: string]: number } =
  {
    'england': 39,
    'spain': 140,
    'france': 61,
    'germany': 78,
    'italy': 135
  }

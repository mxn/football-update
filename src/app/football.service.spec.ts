import { TestBed } from '@angular/core/testing';

import { FootballService } from './football.service';
import { fake_team_response } from "./fake_team_fixture_response";

describe('FootballService', () => {
  let service: FootballService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FootballService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should map', ()  => {
    let team = service.toTeamStandings(fake_standing_response)[0];
    expect(team.id).toEqual(40);
    expect(team.goalDifference).toEqual(41);
    expect(team.points).toEqual(70);
    expect(team.wins).toEqual(23);
    expect(team.losses).toEqual(0);
    expect(team.draws).toEqual(1);
  });

  it('should map response to GameResult array', () => {
    let gameResults = service.toGameResults(fake_team_response);
    expect(gameResults.length).toEqual(2);
    let game0 = gameResults[0];
    expect(game0.homeTeamName).toEqual('Luton');
    expect(game0.awayTeamName).toEqual('Liverpool');
    expect(game0.homeTeamGoals).toEqual(1);
    expect(game0.awayTeamGoals).toEqual(1);
    let game1 = gameResults[1];
    expect(game1.homeTeamName).toEqual('Liverpool');
    expect(game1.homeTeamLogoUrl).toContain('40');
    expect(game1.homeTeamGoals).toEqual(3);
    expect(game1.awayTeamGoals).toEqual(0);
  });
});

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


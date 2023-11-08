import { TestBed } from '@angular/core/testing';

import { FootballService } from './football.service';

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


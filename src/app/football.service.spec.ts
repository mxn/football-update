import { TestBed } from '@angular/core/testing';

import { FootballService } from './football.service';
import { fake_team_response } from "./test_data/fake_team_fixture_response";
import { fake_standing_response } from "./test_data/fake_standing_response";
import { HttpClientModule } from "@angular/common/http";

describe('FootballService', () => {
  let service: FootballService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
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

  it('should get leagueId for country', () => {
    let leagueId = service.getLeagueId('Spain')
    expect(leagueId).toEqual(140);
  });
});



export interface FixturesResponse {
  response: Fixture[];
  get?: string;
  paging?: object;
  parameters?: object;
  results?: number;
  errors?: object[]
}

export interface Fixture {
  fixture: object
  score: object;
  teams: {
    away: TeamResponse;
    home: TeamResponse
  };
  league: object;
  goals: { away: number; home: number }
}

interface TeamResponse {
  winner?: boolean | null,
  name: string;
  logo: string;
  id: number
}


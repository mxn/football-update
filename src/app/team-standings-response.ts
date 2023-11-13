export interface TeamStandingsResponse {
  response: {
    league: {
      standings: StandingResponse[][]
      id: number;
      name?: string;
      country?: string;
      logo?: string;
      flag?: string
      season?: number;
    },

  }[];
  get?: string;
  parameters?: object;
  errors?: object[];
  results?: number;
  paging?: object
}

export interface StandingResponse {
  all: { lose: number; draw: number; played: number; win: number; goals: { against: number; for: number } };
  rank: number;
  team: { name: string; logo: string; id: number };
  goalsDiff: number;
  points: number;
  group?: string;
  form?: string;
  status?: string;
  description?: string;
  home?: object;
  away?: object;
  update?: string
}



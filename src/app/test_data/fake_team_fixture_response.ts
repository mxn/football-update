export const fake_team_response = {
  get: "fixtures",
  parameters: {
    league: "39",
    team: "40",
    last: "10",
  },
  errors: [
  ],
  results: 10,
  paging: {
    current: 1,
    total: 1,
  },
  response: [
    {
      fixture: {
        id: 1035141,
        referee: "Andy Madley, England",
        timezone: "UTC",
        date: "2023-11-05T16:30:00+00:00",
        timestamp: 1699201800,
        periods: {

          first: 1699201800,
          second: 1699205400,

        },
        venue: {

          id: 551,
          name: "Kenilworth Road",
          city: "Luton, Bedfordshire",
        },
        status: {

          long: "Match Finished",
          short: "FT",
          elapsed: 90
        }

      },
      league: {

        id: 39,
        name: "Premier League",
        country: "England",
        logo: "https://media-4.api-sports.io/football/leagues/39.png",
        flag: "https://media-4.api-sports.io/flags/gb.svg",
        season: 2023,
        round: "Regular Season - 11"
      },
      teams: {
        home: {
          id: 1359,
          name: "Luton",
          logo: "https://media-4.api-sports.io/football/teams/1359.png",
          winner: null
        },
        away: {
          id: 40,
          name: "Liverpool",
          logo: "https://media-4.api-sports.io/football/teams/40.png",
          winner: null
        }
      },
      goals: {
        home: 1,
        away: 1,
      },
      score: {
        halftime: {
          home: 0,
          away: 0
        },
        fulltime: {
          home: 1,
          away: 1
        },
        extratime: {
          home: null,
          away: null
        },
        penalty: {
          home: null,
          away: null
        }
      }

    },
    {
      fixture: {
        id: 1035133,
        referee: "Chris Kavanagh, England",
        timezone: "UTC",
        date: "2023-10-29T14:00:00+00:00",
        timestamp: 1698588000,
        periods: {
          first: 1698588000,
          second: 1698591600
        },
        venue: {
          id: 550,
          name: "Anfield",
          city: "Liverpool"
        },
        status: {
          long: "Match Finished",
          short: "FT",
          elapsed: 90
        }
      },
      league: {
        id: 39,
        name: "Premier League",
        country: "England",
        logo: "https://media-4.api-sports.io/football/leagues/39.png",
        flag: "https://media-4.api-sports.io/flags/gb.svg",
        season: 2023,
        round: "Regular Season - 10"
      },
      teams: {
        home: {
          id: 40,
          name: "Liverpool",
          logo: "https://media-4.api-sports.io/football/teams/40.png",
          winner: true
        },
        away: {
          id: 65,
          name: "Nottingham Forest",
          logo: "https://media-4.api-sports.io/football/teams/65.png",
          winner: false
        }
      },
      goals: {
        home: 3,
        away: 0
      },
      score: {
        halftime: {
          home: 2,
          away: 0
        },
        fulltime: {
          home: 3,
          away: 0
        },
        extratime: {
          home: null,
          away: null
        },
        penalty: {
          home: null,
          away: null
        }
      }
    }
  ]

}

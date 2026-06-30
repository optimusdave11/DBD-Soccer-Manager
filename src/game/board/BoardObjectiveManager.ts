export interface BoardObjective {

  primary: string;

  secondary: string[];

}

export class BoardObjectiveManager {

  getObjectives(
    leagueId: number,
    reputation: number,
    leagueRank: number
  ): BoardObjective {

    // MLS

    if (leagueId === 8) {

      if (leagueRank <= 5) {

        return {

          primary:
            "Win the MLS Playoffs",

          secondary: [

            "Win the Supporters' Shield",

            "Win the MLS Cup",

          ],

        };

      }

      if (leagueRank <= 12) {

        return {

          primary:
            "Reach the MLS Playoff Semi-finals",

          secondary: [

            "Finish in the Top 4 of the Conference",

            "Reach the MLS Cup Quarter-finals",

          ],

        };

      }

      return {

        primary:
          "Qualify for the MLS Playoffs",

        secondary: [

          "Reach the MLS Cup Quarter-finals",

        ],

      };

    }

    // Championship

    if (leagueId === 13) {

      if (leagueRank <= 10) {

        return {

          primary:
            "Gain Promotion",

          secondary: [

            "Reach the Round of 16 of the FA Cup",

          ],

        };

      }

      return {

        primary:
          "Finish in the Top Half",

        secondary: [

          "Reach the Round of 16 of the FA Cup",

          "Reach the Round of 16 of the EFL Cup",

        ],

      };

    }

    // Elite

    if (reputation >= 90) {

      return {

        primary:
          "Win the League",

        secondary: [

          "Win the Domestic Cup",

          "Reach the UEFA Champions League Final",

        ],

      };

    }

    // Title Challenger

    if (reputation >= 82) {

      return {

        primary:
          "Challenge for the League Title",

        secondary: [

          "Reach the Domestic Cup Final",

          "Reach the UEFA Champions League Quarter-finals",

        ],

      };

    }

    // European Club

    if (reputation >= 74) {

      return {

        primary:
          "Qualify for the UEFA Champions League",

        secondary: [

          "Reach the Domestic Cup Semi-finals",

        ],

      };

    }

    // Upper Mid-table

    if (reputation >= 66) {

      return {

        primary:
          "Qualify for European Competition",

        secondary: [

          "Reach the Domestic Cup Quarter-finals",

        ],

      };

    }

    // Mid-table

    if (reputation >= 58) {

      return {

        primary:
          "Finish in the Top Half",

        secondary: [

          "Reach the Domestic Cup Quarter-finals",

        ],

      };

    }

    // Lower-table

    return {

      primary:
        "Avoid Relegation",

      secondary: [

        "Reach the Round of 16 of the Domestic Cup",

      ],

    };

  }

}

export const boardObjectiveManager =
  new BoardObjectiveManager();
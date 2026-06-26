export const DB_NAME = "FootballManagerDB";

export const DB_VERSION = 1;

export const STORES = {
  GAME_WORLD: "gameWorld",

    PLAYERS: "players",
      CLUBS: "clubs",
        LEAGUES: "leagues",
          COMPETITIONS: "competitions",
            MANAGERS: "managers",
              NATIONS: "nations",

                SAVE_PLAYERS: "savePlayers",
                  SAVE_CLUBS: "saveClubs",

                    FIXTURES: "fixtures",
                      TRANSFERS: "transfers",

                        SETTINGS: "settings",
                        } as const;
export interface GameWorld {
    id: number;

      saveName: string;

        currentDate: string;
          currentSeason: number;

            playerIds: number[];
              clubIds: number[];
                leagueIds: number[];
                  competitionIds: number[];
                    managerIds: number[];

                      userClubId: number;

                        isTransferWindowOpen: boolean;

                          lastPlayerId: number;
                            lastClubId: number;
                              lastManagerId: number;
                                lastFixtureId: number;
                                  lastTransferId: number;

                                    gameSpeed: number;

                                      autosaveEnabled: boolean;

                                        createdAt: string;
                                          lastSavedAt: string;
                                          }
}
import { PlayerStatus } from "../shared/enums";

export interface SavePlayer {
  id: number;

    clubId: number;
      leagueId: number;

        morale: number; // 0-100
          fitness: number; // 0-100
            sharpness: number; // 0-100
              form: number; // 0-100

                value: number;

                  contractYearsRemaining: number;

                    status: PlayerStatus;

                      injuryId: number | null;
                        suspensionMatches: number;

                          goals: number;
                            assists: number;
                              appearances: number;
                                cleanSheets: number;

                                  yellowCards: number;
                                    redCards: number;

                                      averageRating: number;

                                        transferListed: boolean;
                                          loanListed: boolean;

                                            happiness: number; // 0-100

                                              developmentProgress: number;
                                              }
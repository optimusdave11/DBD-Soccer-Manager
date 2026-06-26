export interface SaveClub {
    id: number;

      managerId: number;

        balance: number;

          transferBudget: number;
            wageBudget: number;

              weeklyWages: number;

                leaguePosition: number;

                  played: number;
                    won: number;
                      drawn: number;
                        lost: number;

                          goalsFor: number;
                            goalsAgainst: number;
                              goalDifference: number;

                                points: number;

                                  form: string; // e.g. "WWDLW"

                                    playerIds: number[];

                                      injuries: number;

                                        boardConfidence: number; // 0-100

                                          fanConfidence: number; // 0-100
                                          }
}
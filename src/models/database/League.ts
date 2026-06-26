export interface League {
    id: number;

      name: string;

        nationId: number;

          tier: number;

            reputation: number; // 0-100

              promotionPlaces: number;
                playoffPlaces: number;
                  relegationPlaces: number;

                    transferWindowSummerStart: string;
                      transferWindowSummerEnd: string;

                        transferWindowWinterStart: string;
                          transferWindowWinterEnd: string;
                          }
}
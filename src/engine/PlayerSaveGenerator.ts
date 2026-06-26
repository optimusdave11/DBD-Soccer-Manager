import {
    playerRepository,
      savePlayerRepository,
      } from "../../db";

      import { PlayerStatus } from "../../models/shared/enums";
      import type { SavePlayer } from "../../models/save/Player";

      export class PlayerSaveGenerator {
        async generate() {
            const players = await playerRepository.getAll();

                for (const player of players) {
                      const savePlayer: SavePlayer = {
                              id: player.id,

                                      clubId: player.clubId,
                                              leagueId: player.leagueId,

                                                      morale: 75,
                                                              fitness: 100,
                                                                      sharpness: 80,
                                                                              form: 50,

                                                                                      value: player.value,

                                                                                              contractYearsRemaining:
                                                                                                        player.contractExpiryYear - new Date().getFullYear(),

                                                                                                                status: PlayerStatus.AVAILABLE,

                                                                                                                        injuryId: null,
                                                                                                                                suspensionMatches: 0,

                                                                                                                                        goals: 0,
                                                                                                                                                assists: 0,
                                                                                                                                                        appearances: 0,
                                                                                                                                                                cleanSheets: 0,

                                                                                                                                                                        yellowCards: 0,
                                                                                                                                                                                redCards: 0,

                                                                                                                                                                                        averageRating: 0,

                                                                                                                                                                                                transferListed: false,
                                                                                                                                                                                                        loanListed: false,

                                                                                                                                                                                                                happiness: 75,

                                                                                                                                                                                                                        developmentProgress: 0,
                                                                                                                                                                                                                              };

                                                                                                                                                                                                                                    await savePlayerRepository.create(savePlayer);
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                          export const playerSaveGenerator = new PlayerSaveGenerator();
}
import {
    clubRepository,
      playerRepository,
        saveClubRepository,
        } from "../../db";

        import type { SaveClub } from "../../models/save/Club";

        export class ClubSaveGenerator {
          async generate() {
              const clubs = await clubRepository.getAll();
                  const players = await playerRepository.getAll();

                      for (const club of clubs) {
                            const clubPlayers = players.filter(
                                    (player) => player.clubId === club.id
                                          );

                                                const saveClub: SaveClub = {
                                                        id: club.id,

                                                                managerId: 0,

                                                                        balance: club.balance,

                                                                                transferBudget: club.transferBudget,
                                                                                        wageBudget: 0,

                                                                                                weeklyWages: clubPlayers.reduce(
                                                                                                          (total, player) => total + player.wage,
                                                                                                                    0
                                                                                                                            ),

                                                                                                                                    leaguePosition: 0,

                                                                                                                                            played: 0,
                                                                                                                                                    won: 0,
                                                                                                                                                            drawn: 0,
                                                                                                                                                                    lost: 0,

                                                                                                                                                                            goalsFor: 0,
                                                                                                                                                                                    goalsAgainst: 0,
                                                                                                                                                                                            goalDifference: 0,

                                                                                                                                                                                                    points: 0,

                                                                                                                                                                                                            form: "",

                                                                                                                                                                                                                    playerIds: clubPlayers.map((player) => player.id),

                                                                                                                                                                                                                            injuries: 0,

                                                                                                                                                                                                                                    boardConfidence: 75,
                                                                                                                                                                                                                                            fanConfidence: 75,
                                                                                                                                                                                                                                                  };

                                                                                                                                                                                                                                                        await saveClubRepository.create(saveClub);
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                                              export const clubSaveGenerator = new ClubSaveGenerator();
}
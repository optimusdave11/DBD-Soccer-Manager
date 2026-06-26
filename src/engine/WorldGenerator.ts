import {
    clubRepository,
      competitionRepository,
        gameWorldRepository,
          leagueRepository,
            managerRepository,
              playerRepository,
              } from "../../db";

              import type { GameWorld } from "../../models/save/GameWorld";

              interface WorldOptions {
                saveName: string;
                  userClubId: number;
                  }

                  export class WorldGenerator {
                    async generate(options: WorldOptions) {
                        const players = await playerRepository.getAll();
                            const clubs = await clubRepository.getAll();
                                const leagues = await leagueRepository.getAll();
                                    const competitions = await competitionRepository.getAll();
                                        const managers = await managerRepository.getAll();

                                            const world: GameWorld = {
                                                  id: 1,

                                                        saveName: options.saveName,

                                                              currentDate: "2026-07-01",
                                                                    currentSeason: 2026,

                                                                          playerIds: players.map((p) => p.id),
                                                                                clubIds: clubs.map((c) => c.id),
                                                                                      leagueIds: leagues.map((l) => l.id),
                                                                                            competitionIds: competitions.map((c) => c.id),
                                                                                                  managerIds: managers.map((m) => m.id),

                                                                                                        userClubId: options.userClubId,

                                                                                                              isTransferWindowOpen: true,

                                                                                                                    lastPlayerId: Math.max(...players.map((p) => p.id)),
                                                                                                                          lastClubId: Math.max(...clubs.map((c) => c.id)),
                                                                                                                                lastManagerId: Math.max(...managers.map((m) => m.id)),
                                                                                                                                      lastFixtureId: 0,
                                                                                                                                            lastTransferId: 0,

                                                                                                                                                  gameSpeed: 1,

                                                                                                                                                        autosaveEnabled: true,

                                                                                                                                                              createdAt: new Date().toISOString(),
                                                                                                                                                                    lastSavedAt: new Date().toISOString(),
                                                                                                                                                                        };

                                                                                                                                                                            await gameWorldRepository.create(world);
                                                                                                                                                                              }
                                                                                                                                                                              }

                                                                                                                                                                              export const worldGenerator = new WorldGenerator();
}
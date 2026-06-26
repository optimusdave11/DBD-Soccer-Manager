import { database } from "./Database";
import { STORES } from "./schema";

export async function seedStore<T>(
  storeName: string,
    data: T[]
    ): Promise<void> {
      const store = await database.getStore(storeName, "readwrite");

        for (const item of data) {
            store.put(item);
              }
              }

              export async function seedDatabase({
                players,
                  clubs,
                    leagues,
                      competitions,
                        managers,
                          nations,
                          }: {
                            players: unknown[];
                              clubs: unknown[];
                                leagues: unknown[];
                                  competitions: unknown[];
                                    managers: unknown[];
                                      nations: unknown[];
                                      }) {
                                        await seedStore(STORES.PLAYERS, players);
                                          await seedStore(STORES.CLUBS, clubs);
                                            await seedStore(STORES.LEAGUES, leagues);
                                              await seedStore(STORES.COMPETITIONS, competitions);
                                                await seedStore(STORES.MANAGERS, managers);
                                                  await seedStore(STORES.NATIONS, nations);
                                                  }
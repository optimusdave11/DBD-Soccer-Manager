import { database } from "./Database";
import { STORES } from "./schema";

export async function seedStore<T>(
  storeName: string,
  data: T[]
): Promise<void> {
  const store = await database.getStore(storeName, "readwrite");

  await Promise.all(
    data.map(item => store.put(item))
  );
}

export interface SeedData {
  players: unknown[];
  clubs: unknown[];
  competitions: unknown[];
  managers: unknown[];
  nations: unknown[];
}

export async function seedDatabase(data: SeedData): Promise<void> {
  await seedStore(STORES.PLAYERS, data.players);
  await seedStore(STORES.CLUBS, data.clubs);
  await seedStore(STORES.COMPETITIONS, data.competitions);
  await seedStore(STORES.MANAGERS, data.managers);
  await seedStore(STORES.NATIONS, data.nations);
}
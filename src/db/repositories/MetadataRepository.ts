import { database } from "../db/Database";
import { STORES } from "../db/schema";

export class MetadataRepository {

  async get(key: string): Promise<any> {
    const store = await database.getStore(STORES.METADATA);

    return store.get(key);
  }

  async set(key: string, value: unknown): Promise<void> {
    const store = await database.getStore(
      STORES.METADATA,
      "readwrite"
    );

    await store.put({
      key,
      value
    });
  }

}

export const metadataRepository =
  new MetadataRepository();
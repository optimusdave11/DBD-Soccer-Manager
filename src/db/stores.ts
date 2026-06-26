import { STORES } from "./schema";

export function createStores(db: IDBDatabase): void {

  if (!db.objectStoreNames.contains(STORES.PLAYERS)) {
    db.createObjectStore(STORES.PLAYERS, {
      keyPath: "id",
    });
  }

  if (!db.objectStoreNames.contains(STORES.CLUBS)) {
    db.createObjectStore(STORES.CLUBS, {
      keyPath: "id",
    });
  }

  if (!db.objectStoreNames.contains(STORES.COMPETITIONS)) {
    db.createObjectStore(STORES.COMPETITIONS, {
      keyPath: "id",
    });
  }

  if (!db.objectStoreNames.contains(STORES.MANAGERS)) {
    db.createObjectStore(STORES.MANAGERS, {
      keyPath: "id",
    });
  }

  if (!db.objectStoreNames.contains(STORES.NATIONS)) {
    db.createObjectStore(STORES.NATIONS, {
      keyPath: "id",
    });
  }

  if (!db.objectStoreNames.contains(STORES.METADATA)) {
    db.createObjectStore(STORES.METADATA, {
      keyPath: "key",
    });
  }

  if (!db.objectStoreNames.contains(STORES.TRANSACTIONS)) {

    const transactionStore = db.createObjectStore(
      STORES.TRANSACTIONS,
      {
        keyPath: "id",
      }
    );

    transactionStore.createIndex(
      "clubId",
      "clubId",
      { unique: false }
    );

    transactionStore.createIndex(
      "season",
      "season",
      { unique: false }
    );

    transactionStore.createIndex(
      "type",
      "type",
      { unique: false }
    );

  }

}
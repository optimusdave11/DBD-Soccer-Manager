import { DB_NAME, DB_VERSION } from "./schema";
import { createStores } from "./stores";

class DBClient {
  private db: IDBDatabase | null = null;

    async connect(): Promise<IDBDatabase> {
        if (this.db) return this.db;

            return new Promise((resolve, reject) => {
                  const request = indexedDB.open(DB_NAME, DB_VERSION);

                        request.onerror = () => reject(request.error);

                              request.onsuccess = () => {
                                      this.db = request.result;
                                              resolve(this.db);
                                                    };

                                                          request.onupgradeneeded = (event) => {
                                                                  const db = (event.target as IDBOpenDBRequest).result;

                                                                          createStores(db);
                                                                                };
                                                                                    });
                                                                                      }
                                                                                      }

                                                                                      export const dbClient = new DBClient();
import { dbClient } from "../client";

export class BaseRepository<T extends { id: number }> {
  constructor(private storeName: string) {}

    async getAll(): Promise<T[]> {
        const db = await dbClient.connect();

            return new Promise((resolve, reject) => {
                  const request = db
                          .transaction(this.storeName)
                                  .objectStore(this.storeName)
                                          .getAll();

                                                request.onsuccess = () => resolve(request.result);

                                                      request.onerror = () => reject(request.error);
                                                          });
                                                            }

                                                              async getById(id: number): Promise<T | undefined> {
                                                                  const db = await dbClient.connect();

                                                                      return new Promise((resolve, reject) => {
                                                                            const request = db
                                                                                    .transaction(this.storeName)
                                                                                            .objectStore(this.storeName)
                                                                                                    .get(id);

                                                                                                          request.onsuccess = () => resolve(request.result);

                                                                                                                request.onerror = () => reject(request.error);
                                                                                                                    });
                                                                                                                      }

                                                                                                                        async create(item: T): Promise<void> {
                                                                                                                            const db = await dbClient.connect();

                                                                                                                                return new Promise((resolve, reject) => {
                                                                                                                                      const request = db
                                                                                                                                              .transaction(this.storeName, "readwrite")
                                                                                                                                                      .objectStore(this.storeName)
                                                                                                                                                              .add(item);

                                                                                                                                                                    request.onsuccess = () => resolve();

                                                                                                                                                                          request.onerror = () => reject(request.error);
                                                                                                                                                                              });
                                                                                                                                                                                }

                                                                                                                                                                                  async update(item: T): Promise<void> {
                                                                                                                                                                                      const db = await dbClient.connect();

                                                                                                                                                                                          return new Promise((resolve, reject) => {
                                                                                                                                                                                                const request = db
                                                                                                                                                                                                        .transaction(this.storeName, "readwrite")
                                                                                                                                                                                                                .objectStore(this.storeName)
                                                                                                                                                                                                                        .put(item);

                                                                                                                                                                                                                              request.onsuccess = () => resolve();

                                                                                                                                                                                                                                    request.onerror = () => reject(request.error);
                                                                                                                                                                                                                                        });
                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                            async delete(id: number): Promise<void> {
                                                                                                                                                                                                                                                const db = await dbClient.connect();

                                                                                                                                                                                                                                                    return new Promise((resolve, reject) => {
                                                                                                                                                                                                                                                          const request = db
                                                                                                                                                                                                                                                                  .transaction(this.storeName, "readwrite")
                                                                                                                                                                                                                                                                          .objectStore(this.storeName)
                                                                                                                                                                                                                                                                                  .delete(id);

                                                                                                                                                                                                                                                                                        request.onsuccess = () => resolve();

                                                                                                                                                                                                                                                                                              request.onerror = () => reject(request.error);
                                                                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                    }
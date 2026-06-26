import { STORES } from "./schema";

export function createStores(db: IDBDatabase) {
  if (!db.objectStoreNames.contains(STORES.GAME_WORLD)) {
      db.createObjectStore(STORES.GAME_WORLD, {
            keyPath: "id",
                });
                  }

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

                                                        if (!db.objectStoreNames.contains(STORES.LEAGUES)) {
                                                            db.createObjectStore(STORES.LEAGUES, {
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

                                                                                                                                if (!db.objectStoreNames.contains(STORES.SAVE_PLAYERS)) {
                                                                                                                                    db.createObjectStore(STORES.SAVE_PLAYERS, {
                                                                                                                                          keyPath: "id",
                                                                                                                                              });
                                                                                                                                                }

                                                                                                                                                  if (!db.objectStoreNames.contains(STORES.SAVE_CLUBS)) {
                                                                                                                                                      db.createObjectStore(STORES.SAVE_CLUBS, {
                                                                                                                                                            keyPath: "id",
                                                                                                                                                                });
                                                                                                                                                                  }

                                                                                                                                                                    if (!db.objectStoreNames.contains(STORES.FIXTURES)) {
                                                                                                                                                                        db.createObjectStore(STORES.FIXTURES, {
                                                                                                                                                                              keyPath: "id",
                                                                                                                                                                                  });
                                                                                                                                                                                    }

                                                                                                                                                                                      if (!db.objectStoreNames.contains(STORES.TRANSFERS)) {
                                                                                                                                                                                          db.createObjectStore(STORES.TRANSFERS, {
                                                                                                                                                                                                keyPath: "id",
                                                                                                                                                                                                    });
                                                                                                                                                                                                      }

                                                                                                                                                                                                        if (!db.objectStoreNames.contains(STORES.SETTINGS)) {
                                                                                                                                                                                                            db.createObjectStore(STORES.SETTINGS, {
                                                                                                                                                                                                                  keyPath: "id",
                                                                                                                                                                                                                      });
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                        }
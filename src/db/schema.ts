export const DB_NAME = "FootballManagerDB";

export const DB_VERSION = 2;

export const STORES = {
  // Master databases
  GAME_WORLD: "gameWorld",

  PLAYERS: "players",
  CLUBS: "clubs",
  COMPETITIONS: "competitions",
  MANAGERS: "managers",
  NATIONS: "nations",

  // System
  METADATA: "metadata",
  TRANSACTIONS: "transactions",

  // Save data
  SAVE_PLAYERS: "savePlayers",
  SAVE_CLUBS: "saveClubs",

  // Gameplay
  FIXTURES: "fixtures",
  TRANSFERS: "transfers",

  // Configuration
  SETTINGS: "settings",
} as const;

export type StoreName = typeof STORES[keyof typeof STORES];
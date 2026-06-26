import { csvLoader } from "./CsvLoader";
import { DATABASE_PATHS } from "./paths";

export class PlayerSeeder {

  async seed() {
    return csvLoader.load(DATABASE_PATHS.PLAYERS);
  }

}

export const playerSeeder = new PlayerSeeder();
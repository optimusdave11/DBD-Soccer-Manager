import { csvLoader } from "./CsvLoader";
import { DATABASE_PATHS } from "./paths";

export class ClubSeeder {

  async seed() {
    return csvLoader.load(DATABASE_PATHS.CLUBS);
  }

}

export const clubSeeder = new ClubSeeder();
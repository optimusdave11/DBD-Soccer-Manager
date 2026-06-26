import { csvLoader } from "./CsvLoader";
import { DATABASE_PATHS } from "./paths";

export class CompetitionSeeder {

  async seed() {
    return csvLoader.load(DATABASE_PATHS.COMPETITIONS);
  }

}

export const competitionSeeder = new CompetitionSeeder();
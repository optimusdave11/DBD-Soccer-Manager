import { csvLoader } from "./CsvLoader";
import { DATABASE_PATHS } from "./paths";

export class NationSeeder {

  async seed() {
    return csvLoader.load(DATABASE_PATHS.NATIONS);
  }

}

export const nationSeeder = new NationSeeder();
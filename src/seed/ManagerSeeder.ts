import { csvLoader } from "./CsvLoader";
import { DATABASE_PATHS } from "./paths";

export class ManagerSeeder {

  async seed() {
    return csvLoader.load(DATABASE_PATHS.MANAGERS);
  }

}

export const managerSeeder = new ManagerSeeder();
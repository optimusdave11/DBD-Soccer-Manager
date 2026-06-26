import { clubSeeder } from "./ClubSeeder";
import { competitionSeeder } from "./CompetitionSeeder";
import { managerSeeder } from "./ManagerSeeder";
import { nationSeeder } from "./NationSeeder";
import { playerSeeder } from "./PlayerSeeder";

export class SeedEngine {
  async seed(): Promise<void> {
      await nationSeeder.seed();

          await competitionSeeder.seed();

              await clubSeeder.seed();

                  await managerSeeder.seed();

                      await playerSeeder.seed();
                        }
                        }

                        export const seedEngine = new SeedEngine();
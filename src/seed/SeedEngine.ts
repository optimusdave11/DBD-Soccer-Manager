import { metadataRepository } from "../repositories/MetadataRepository";
import { seedDatabase } from "../db/seed";

import { playerSeeder } from "./PlayerSeeder";
import { clubSeeder } from "./ClubSeeder";
import { competitionSeeder } from "./CompetitionSeeder";
import { managerSeeder } from "./ManagerSeeder";
import { nationSeeder } from "./NationSeeder";

export class SeedEngine {

  async seed(): Promise<void> {

    const seeded =
      await metadataRepository.get("master_seeded");

    if (seeded?.value === true) {
      console.log("Master database already seeded.");
      return;
    }

    console.log("Loading CSV files...");

    const [
      players,
      clubs,
      competitions,
      managers,
      nations
    ] = await Promise.all([
      playerSeeder.seed(),
      clubSeeder.seed(),
      competitionSeeder.seed(),
      managerSeeder.seed(),
      nationSeeder.seed()
    ]);

    console.log("Writing master database...");

    await seedDatabase({
      players,
      clubs,
      competitions,
      managers,
      nations
    });

    await metadataRepository.set(
      "master_seeded",
      true
    );

    console.log("Database seeded successfully.");

  }

}

export const seedEngine =
  new SeedEngine();
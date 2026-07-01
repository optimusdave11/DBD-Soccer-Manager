import type { Nation } from "../models/database/Nation";

import { nationSeeder } from "../seed/NationSeeder";

export class NationDatabase {

  private nations: Nation[] = [];

  async load(): Promise<void> {

    if (this.nations.length) {
      return;
    }

    this.nations =
      await nationSeeder.seed();

  }

  getAll(): Nation[] {

    return this.nations;

  }

  getNation(
    id: number
  ): Nation | undefined {

    return this.nations.find(
      nation =>
        nation.id === id
    );

  }

  getByName(
    name: string
  ): Nation | undefined {

    return this.nations.find(
      nation =>
        nation.name === name
    );

  }

}

export const nationDatabase =
  new NationDatabase();
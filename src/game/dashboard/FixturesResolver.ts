import { fixtureManager } from "../fixtures/FixtureManager";

export class FixturesResolver {

  resolve() {

    return fixtureManager.getUpcomingFixtures(5);

  }

}

export const fixturesResolver =
  new FixturesResolver();
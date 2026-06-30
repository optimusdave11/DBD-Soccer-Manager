import { fixtureManager } from "../fixtures/FixtureManager";

export class ResultsResolver {

  resolve() {

    return fixtureManager.getRecentResults(5);

  }

}

export const resultsResolver =
  new ResultsResolver();
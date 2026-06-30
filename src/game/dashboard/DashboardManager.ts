import { heroResolver } from "./HeroResolver";
import { contextResolver } from "./ContextResolver";
import { inboxResolver } from "./InboxResolver";
import { fixturesResolver } from "./FixturesResolver";
import { resultsResolver } from "./ResultsResolver";

export interface DashboardState {

  hero: ReturnType<
    typeof heroResolver.resolve
  >;

  context: ReturnType<
    typeof contextResolver.resolve
  >;

  inbox: ReturnType<
    typeof inboxResolver.resolve
  >;

  upcomingFixtures: ReturnType<
    typeof fixturesResolver.resolve
  >;

  recentResults: ReturnType<
    typeof resultsResolver.resolve
  >;

}

export class DashboardManager {

  getState(
    date: Date = new Date()
  ): DashboardState {

    return {

      hero:
        heroResolver.resolve(
          date
        ),

      context:
        contextResolver.resolve(
          date
        ),

      inbox:
        inboxResolver.resolve(),

      upcomingFixtures:
        fixturesResolver.resolve(),

      recentResults:
        resultsResolver.resolve(),

    };

  }

}

export const dashboardManager =
  new DashboardManager();
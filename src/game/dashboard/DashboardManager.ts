import { heroResolver } from "./HeroResolver";
import { contextResolver } from "./ContextResolver";
import { inboxResolver } from "./InboxResolver";
import { resultsResolver } from "./ResultsResolver";
import { fixturesResolver } from "./FixturesResolver";

import { preseasonManager } from "../preseason/PreseasonManager";

export interface DashboardState {

  hero: {
    title: string;
    subtitle: string;
    objective: string;
  };

  context: {
    title: string;
    subtitle: string;
  };

  preseason: {
    country: string;
    played: number;
    total: number;
    nextOpponent: string | null;
    daysUntilMatch: number | null;
  };

  inbox: {
    sender: string;
    subject: string;
    date: string;
    unread: boolean;
  } | null;

  recentResults: any[];

  upcomingFixtures: any[];

}

export class DashboardManager {

  getState(): DashboardState {

    const today = new Date();

    const preseason =
      preseasonManager.getStatus();

    return {

      hero:
        heroResolver.resolve(
          today
        ),

      context:
        contextResolver.resolve(
          today
        ),

      preseason: {
        country: preseason.country,
        played: preseason.played,
        total: preseason.total,
        nextOpponent:
          preseason.nextFixture?.opponentId ?? null,
        daysUntilMatch: null,
      },

      inbox:
        inboxResolver.resolve(),

      recentResults:
        resultsResolver.resolve(),

      upcomingFixtures:
        fixturesResolver.resolve(),

    };

  }

}

export const dashboardManager =
  new DashboardManager();
export type CompetitionType =
  | "LEAGUE"
  | "CUP"
  | "EUROPE"
  | "PRESEASON";

export type FixtureVenue =
  | "HOME"
  | "AWAY"
  | "NEUTRAL"
  | "BEHIND_CLOSED_DOORS";

export interface Fixture {

  id: string;

  date: Date;

  homeClubId: string;

  awayClubId: string;

  competition: CompetitionType;

  venue: FixtureVenue;

  played: boolean;

  homeGoals?: number;

  awayGoals?: number;

}

export class FixtureManager {

  private fixtures: Fixture[] = [];

  addFixture(
    fixture: Fixture
  ): void {

    this.fixtures.push(
      fixture
    );

    this.fixtures.sort(
      (a, b) =>
        a.date.getTime() -
        b.date.getTime()
    );

  }

  addFixtures(
    fixtures: Fixture[]
  ): void {

    fixtures.forEach(
      fixture =>
        this.addFixture(
          fixture
        )
    );

  }

  getAll(): Fixture[] {

    return this.fixtures;

  }

  getUpcomingFixtures(
    limit = 5
  ): Fixture[] {

    return this.fixtures

      .filter(
        fixture =>
          !fixture.played
      )

      .slice(
        0,
        limit
      );

  }

  getRecentResults(
    limit = 5
  ): Fixture[] {

    return this.fixtures

      .filter(
        fixture =>
          fixture.played
      )

      .sort(
        (a, b) =>
          b.date.getTime() -
          a.date.getTime()
      )

      .slice(
        0,
        limit
      );

  }

  markPlayed(
    fixtureId: string,
    homeGoals: number,
    awayGoals: number
  ): void {

    const fixture =
      this.fixtures.find(
        f =>
          f.id ===
          fixtureId
      );

    if (!fixture) {
      return;
    }

    fixture.played = true;

    fixture.homeGoals =
      homeGoals;

    fixture.awayGoals =
      awayGoals;

  }

  clear(): void {

    this.fixtures = [];

  }

}

export const fixtureManager =
  new FixtureManager();
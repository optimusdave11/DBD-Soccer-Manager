export class FixtureScheduler {

  shouldReleaseEuropeanFixtures(
    date: Date
  ): boolean {

    return (
      date.getDate() === 3 &&
      date.getMonth() === 6
    );

  }

  shouldReleaseMLSFixtures(
    date: Date
  ): boolean {

    return (
      date.getDate() === 5 &&
      date.getMonth() === 0
    );

  }

  shouldRegisterEuropeanSquads(
    date: Date
  ): boolean {

    return (
      date.getDate() === 31 &&
      date.getMonth() === 7
    );

  }

}

export const fixtureScheduler =
    new FixtureScheduler();
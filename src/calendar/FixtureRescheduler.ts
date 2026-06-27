export enum FixturePriority {

  CHAMPIONS_LEAGUE = 1,

  EUROPA_LEAGUE = 2,

  CONFERENCE_LEAGUE = 3,

  LEAGUE = 4,

  DOMESTIC_CUP = 5,

  LEAGUE_CUP = 6,

  FRIENDLY = 7

}

export class FixtureRescheduler {

  shouldPostpone(
    first: FixturePriority,
    second: FixturePriority
  ): FixturePriority {

    if (
      first <= FixturePriority.CONFERENCE_LEAGUE
    ) {
      return second;
    }

    if (
      second <= FixturePriority.CONFERENCE_LEAGUE
    ) {
      return first;
    }

    if (
      first === FixturePriority.LEAGUE &&
      (
        second === FixturePriority.DOMESTIC_CUP ||
        second === FixturePriority.LEAGUE_CUP
      )
    ) {
      return first;
    }

    if (
      second === FixturePriority.LEAGUE &&
      (
        first === FixturePriority.DOMESTIC_CUP ||
        first === FixturePriority.LEAGUE_CUP
      )
    ) {
      return second;
    }

    if (
      first === FixturePriority.FRIENDLY
    ) {
      return first;
    }

    if (
      second === FixturePriority.FRIENDLY
    ) {
      return second;
    }

    return second;

  }

}

export const fixtureRescheduler =
    new FixtureRescheduler();
export class SeasonManager {

  isSeasonStart(date: Date): boolean {

    return (
      date.getDate() === 1 &&
      date.getMonth() === 6
    );

  }

  isSeasonEnd(date: Date): boolean {

    return (
      date.getDate() === 30 &&
      date.getMonth() === 5
    );

  }

  isPreSeason(date: Date): boolean {

    const month = date.getMonth() + 1;

    return month === 7 || month === 8;

  }

}

export const seasonManager =
  new SeasonManager();
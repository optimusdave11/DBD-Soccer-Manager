export interface PreseasonStatus {
  active: boolean;
  week: 1 | 2 | 3 | 4 | null;
}

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

    if (month === 7) return true;

    if (
      month === 8 &&
      date.getDate() <= 7
    ) {
      return true;
    }

    return false;
  }

  getPreseasonStatus(
    date: Date
  ): PreseasonStatus {

    if (!this.isPreSeason(date)) {
      return {
        active: false,
        week: null,
      };
    }

    const month = date.getMonth() + 1;

    if (month === 7) {

      const day = date.getDate();

      if (day <= 7)
        return { active: true, week: 1 };

      if (day <= 14)
        return { active: true, week: 2 };

      if (day <= 21)
        return { active: true, week: 3 };

      return { active: true, week: 4 };
    }

    return {
      active: true,
      week: 4,
    };
  }

}

export const seasonManager =
  new SeasonManager();
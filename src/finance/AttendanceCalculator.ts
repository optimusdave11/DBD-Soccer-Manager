import { database } from "../db/Database";
import { STORES } from "../db/schema";

export class AttendanceCalculator {

  async calculate(
    homeClubId: number,
    awayClubId: number,
    competitionImportance: number
  ): Promise<number> {

    const store = await database.getStore(STORES.CLUBS);

    const home = await store.get(homeClubId);
    const away = await store.get(awayClubId);

    const fanFactor =
      (home.fanBase + away.fanBase) / 2;

    const attendance =
      Math.round(
        home.stadiumCapacity *
        fanFactor *
        competitionImportance
      );

    return Math.min(
      attendance,
      home.stadiumCapacity
    );

  }

}

export const attendanceCalculator =
  new AttendanceCalculator();
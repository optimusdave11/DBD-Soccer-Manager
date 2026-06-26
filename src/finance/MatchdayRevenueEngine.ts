import { attendanceCalculator } from "./AttendanceCalculator";
import { ticketPriceCalculator } from "./TicketPriceCalculator";
import { revenueEngine } from "./RevenueEngine";

export class MatchdayRevenueEngine {

  async process(
    homeClubId: number,
    awayClubId: number,
    baseTicketPrice: number,
    importance: number,
    season: number
  ) {

    const attendance =
      await attendanceCalculator.calculate(
        homeClubId,
        awayClubId,
        importance
      );

    const ticketPrice =
      ticketPriceCalculator.calculate(
        baseTicketPrice,
        importance
      );

    return revenueEngine.matchdayRevenue(
      homeClubId,
      attendance * ticketPrice,
      season
    );

  }

}

export const matchdayRevenueEngine =
  new MatchdayRevenueEngine();
import { revenueEngine } from "./RevenueEngine";
import { prizeMoneyCalculator } from "./PrizeMoneyCalculator";

export class PrizeMoneyEngine {

  async award(
    clubId: number,
    championPrize: number,
    percentage: number,
    competitionName: string,
    season: number
  ) {

    const amount =
      prizeMoneyCalculator.calculate(
        championPrize,
        percentage
      );

    return revenueEngine.prizeMoney(
      clubId,
      amount,
      competitionName,
      season
    );

  }

}

export const prizeMoneyEngine =
  new PrizeMoneyEngine();
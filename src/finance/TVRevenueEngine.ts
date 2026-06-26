import { revenueEngine } from "./RevenueEngine";

export class TVRevenueEngine {

  async distribute(
    clubId: number,
    amount: number,
    season: number
  ) {

    return revenueEngine.tvRevenue(
      clubId,
      amount,
      season
    );

  }

}

export const tvRevenueEngine =
  new TVRevenueEngine();
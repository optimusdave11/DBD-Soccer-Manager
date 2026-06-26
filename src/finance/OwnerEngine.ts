import { revenueEngine } from "./RevenueEngine";

export class OwnerEngine {

  canInject(
    lastInjectionSeason: number,
    currentSeason: number
  ) {

    return (
      currentSeason - lastInjectionSeason >= 3
    );

  }

  async inject(
    clubId: number,
    amount: number,
    season: number
  ) {

    return revenueEngine.ownerInvestment(
      clubId,
      amount,
      season
    );

  }

}

export const ownerEngine =
  new OwnerEngine();
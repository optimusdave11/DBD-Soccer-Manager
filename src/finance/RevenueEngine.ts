import { balanceManager } from "./BalanceManager";
import { TransactionResult } from "./TransactionResult";
import { TransactionType } from "./TransactionType";

export class RevenueEngine {

  async prizeMoney(
    clubId: number,
    amount: number,
    competition: string,
    season: number
  ): Promise<TransactionResult> {

    return balanceManager.credit(
      clubId,
      amount,
      TransactionType.PRIZE_MONEY,
      `${competition} prize money`,
      season
    );

  }

  async tvRevenue(
    clubId: number,
    amount: number,
    season: number
  ): Promise<TransactionResult> {

    return balanceManager.credit(
      clubId,
      amount,
      TransactionType.TV_REVENUE,
      "TV revenue",
      season
    );

  }

  async sponsorship(
    clubId: number,
    amount: number,
    sponsor: string,
    season: number
  ): Promise<TransactionResult> {

    return balanceManager.credit(
      clubId,
      amount,
      TransactionType.SPONSORSHIP,
      `${sponsor} sponsorship`,
      season
    );

  }

  async matchdayRevenue(
    clubId: number,
    amount: number,
    season: number
  ): Promise<TransactionResult> {

    return balanceManager.credit(
      clubId,
      amount,
      TransactionType.MATCHDAY_REVENUE,
      "Matchday revenue",
      season
    );

  }

  async ownerInvestment(
    clubId: number,
    amount: number,
    season: number
  ): Promise<TransactionResult> {

    return balanceManager.credit(
      clubId,
      amount,
      TransactionType.OWNER_INVESTMENT,
      "Owner investment",
      season
    );

  }

}

export const revenueEngine =
  new RevenueEngine();
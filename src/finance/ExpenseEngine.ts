import { balanceManager } from "./BalanceManager";
import { TransactionResult } from "./TransactionResult";
import { TransactionType } from "./TransactionType";

export class ExpenseEngine {

  async playerWages(
    clubId: number,
    amount: number,
    season: number
  ): Promise<TransactionResult> {

    return balanceManager.debit(
      clubId,
      amount,
      TransactionType.PLAYER_WAGES,
      "Player wages",
      season,
      {
        allowNegativeBalance: true
      }
    );

  }

  async staffWages(
    clubId: number,
    amount: number,
    season: number
  ): Promise<TransactionResult> {

    return balanceManager.debit(
      clubId,
      amount,
      TransactionType.STAFF_WAGES,
      "Staff wages",
      season,
      {
        allowNegativeBalance: true
      }
    );

  }

  async stadiumMaintenance(
    clubId: number,
    amount: number,
    season: number
  ): Promise<TransactionResult> {

    return balanceManager.debit(
      clubId,
      amount,
      TransactionType.STADIUM_MAINTENANCE,
      "Stadium maintenance",
      season
    );

  }

  async stadiumProject(
    clubId: number,
    amount: number,
    season: number
  ): Promise<TransactionResult> {

    return balanceManager.debit(
      clubId,
      amount,
      TransactionType.STADIUM_PROJECT,
      "Stadium project",
      season
    );

  }

  async ffpFine(
    clubId: number,
    amount: number,
    season: number
  ): Promise<TransactionResult> {

    return balanceManager.debit(
      clubId,
      amount,
      TransactionType.FFP_FINE,
      "Financial Fair Play fine",
      season,
      {
        allowNegativeBalance: true
      }
    );

  }

}

export const expenseEngine =
  new ExpenseEngine();
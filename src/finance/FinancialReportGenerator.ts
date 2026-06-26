import { financialTransactionRepository } from "./FinancialTransactionRepository";
import { TransactionType } from "./TransactionType";

export class FinancialReportGenerator {

  async generate(
    clubId: number,
    season: number
  ) {

    const transactions =
      await financialTransactionRepository.getByClub(
        clubId
      );

    const seasonTransactions =
      transactions.filter(
        t => t.season === season
      );

    const income =
      seasonTransactions
        .filter(t => t.amount > 0)
        .reduce((a, b) => a + b.amount, 0);

    const expenses =
      Math.abs(
        seasonTransactions
          .filter(t => t.amount < 0)
          .reduce((a, b) => a + b.amount, 0)
      );

    return {

      clubId,

      season,

      income,

      expenses,

      profit: income - expenses,

      transferIncome:
        seasonTransactions
          .filter(
            t =>
              t.type ===
              TransactionType.PLAYER_SALE
          )
          .reduce((a, b) => a + b.amount, 0),

      transferExpenses:
        Math.abs(
          seasonTransactions
            .filter(
              t =>
                t.type ===
                TransactionType.PLAYER_PURCHASE
            )
            .reduce((a, b) => a + b.amount, 0)
        )

    };

  }

}

export const financialReportGenerator =
  new FinancialReportGenerator();
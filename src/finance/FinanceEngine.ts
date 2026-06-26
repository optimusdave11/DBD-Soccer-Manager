import { expenseEngine } from "./ExpenseEngine";
import { revenueEngine } from "./RevenueEngine";

export class FinanceEngine {

  async onMatchday(): Promise<void> {

    // Matchday revenue
    // Stadium expenses
    // Bonuses (future)

  }

  async endOfWeek(): Promise<void> {

    // Weekly player wages
    // Weekly staff wages

  }

  async endOfMonth(): Promise<void> {

    // Sponsorship payments
    // TV revenue
    // Transfer installments

  }

  async endOfSeason(): Promise<void> {

    // Prize money

    // Board sets new budgets

    // FFP check

    // Owner investment

    // Stadium decisions

  }

}

export const financeEngine = new FinanceEngine();
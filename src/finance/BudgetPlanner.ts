import { budgetManager } from "./BudgetManager";

export class BudgetPlanner {

  calculateTransferBudget(
    balance: number,
    financialStanding: number
  ): number {

    let percentage = 0.25;

    if (financialStanding >= 90) percentage = 0.45;
    else if (financialStanding >= 80) percentage = 0.40;
    else if (financialStanding >= 70) percentage = 0.35;
    else if (financialStanding >= 60) percentage = 0.30;

    return Math.round(balance * percentage);

  }

  calculateWageBudget(
    balance: number
  ): number {

    return Math.round(balance * 0.15);

  }

  async apply(
    clubId: number,
    balance: number,
    financialStanding: number
  ) {

    await budgetManager.setTransferBudget(
      clubId,
      this.calculateTransferBudget(
        balance,
        financialStanding
      )
    );

    await budgetManager.setWageBudget(
      clubId,
      this.calculateWageBudget(balance)
    );

  }

}

export const budgetPlanner =
  new BudgetPlanner();
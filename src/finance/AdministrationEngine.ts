import { ClubStatus } from "./Bankruptcy";

export class AdministrationEngine {

  evaluate(
    balance: number
  ): ClubStatus {

    if (balance >= 0)
      return ClubStatus.NORMAL;

    if (balance > -20_000_000)
      return ClubStatus.ADMINISTRATION;

    return ClubStatus.BANKRUPT;

  }

}

export const administrationEngine =
  new AdministrationEngine();
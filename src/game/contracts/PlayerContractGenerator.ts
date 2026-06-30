import { PlayerContract } from "./ContractTypes";

export class PlayerContractGenerator {

  generate(
    playerId: string,
    clubId: string,
    age: number,
    overall: number,
    potential: number,
    marketValue: number,
    currentWeeklyWage: number,
    squadStatus:
      | "STAR_PLAYER"
      | "IMPORTANT_PLAYER"
      | "FIRST_TEAM"
      | "ROTATION"
      | "PROSPECT",
    position:
      | "GK"
      | "DEF"
      | "MID"
      | "FWD",
    clubReputation: number,
    signingDate: Date
  ): PlayerContract {

    const years =
      this.generateLength(
        age,
        potential,
        squadStatus
      );

    const weeklyWage =
      this.generateWeeklyWage(
        currentWeeklyWage,
        overall,
        marketValue,
        clubReputation,
        squadStatus,
        position
      );

    const endDate =
      this.generateExpiryDate(
        signingDate,
        years
      );

    return {

      id:
        crypto.randomUUID(),

      type:
        "PLAYER",

      personId:
        playerId,

      clubId,

      startDate:
        signingDate,

      endDate,

      years,

      salary:
        weeklyWage,

      currency:
        "€",

      squadStatus,

    };

  }

  private generateLength(
    age: number,
    potential: number,
    squadStatus: string
  ): number {

    let years = 3;

    if (age <= 20)
      years = 5;

    else if (age <= 24)
      years = 5;

    else if (age <= 28)
      years = 4;

    else if (age <= 31)
      years = 3;

    else if (age <= 34)
      years = 2;

    else
      years = 1;

    if (
      potential >= 85 &&
      age <= 23
    ) {

      years++;

    }

    if (
      squadStatus ===
        "STAR_PLAYER" ||
      squadStatus ===
        "IMPORTANT_PLAYER"
    ) {

      years++;

    }

    return Math.min(
      years,
      6
    );

  }

  private generateWeeklyWage(
    currentWage: number,
    overall: number,
    value: number,
    clubRep: number,
    squadStatus: string,
    position: string
  ): number {

    let wage =
      currentWage;

    wage +=
      (overall - 70) *
      1500;

    wage +=
      Math.floor(
        value / 250000
      );

    wage +=
      clubRep * 600;

    switch (
      squadStatus
    ) {

      case "STAR_PLAYER":
        wage *= 1.60;
        break;

      case "IMPORTANT_PLAYER":
        wage *= 1.35;
        break;

      case "FIRST_TEAM":
        wage *= 1.15;
        break;

      case "ROTATION":
        wage *= 0.95;
        break;

      case "PROSPECT":
        wage *= 0.60;
        break;

    }

    wage *=
      0.95 +
      Math.random() *
      0.10;

    wage = Math.max(
      wage,
      5000
    );

    const cap =
      this.getPositionCap(
        position
      );

    wage = Math.min(
      wage,
      cap
    );

    return Math.round(
      wage
    );

  }

  private getPositionCap(
    position: string
  ): number {

    switch (
      position
    ) {

      case "MID":
        return 400000;

      case "DEF":
        return 375000;

      case "GK":
        return 350000;

      default:
        return 550000;

    }

  }

  private generateExpiryDate(
    signingDate: Date,
    years: number
  ): Date {

    const year =
      signingDate.getMonth() >= 6
        ? signingDate.getFullYear() + years
        : signingDate.getFullYear() + years + 1;

    return new Date(
      year,
      5,
      30
    );

  }

}
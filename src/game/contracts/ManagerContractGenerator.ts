import { boardObjectiveManager } from "../board/BoardObjectiveManager";

import {
  ManagerContract,
} from "./ContractTypes";

export class ManagerContractGenerator {

  generate(
    clubId: string,
    clubReputation: number,
    managerReputation: number,
    leagueId: number,
    leagueRank: number
  ): ManagerContract {

    const years =
      this.generateContractLength(
        managerReputation
      );

    const currency =
      this.getCurrency(
        leagueId
      );

    const salary =
      this.generateSalary(
        clubReputation,
        managerReputation
      );

    const objectives =
      boardObjectiveManager.getObjectives(
        leagueId,
        clubReputation,
        leagueRank
      );

    const startDate =
      new Date();

    const endDate =
      new Date(
        startDate.getFullYear() + years,
        startDate.getMonth(),
        startDate.getDate()
      );

    return {

      id:
        crypto.randomUUID(),

      type:
        "MANAGER",

      personId: "",

      clubId,

      startDate,

      endDate,

      years,

      salary,

      currency,

      boardObjective:
        objectives.primary,

      secondaryObjectives:
        objectives.secondary,

    };

  }

  private generateContractLength(
    managerReputation: number
  ): number {

    if (managerReputation <= 10) {

      return this.random(
        1,
        3
      );

    }

    if (managerReputation <= 35) {

      return this.random(
        2,
        4
      );

    }

    return this.random(
      3,
      5
    );

  }

  private generateSalary(
    clubRep: number,
    managerRep: number
  ): number {

    const [
      min,
      max,
    ] = this.getSalaryRange(
      clubRep,
      managerRep
    );

    return this.random(
      min,
      max
    );

  }

  private getSalaryRange(
    clubRep: number,
    managerRep: number
  ): [number, number] {

    const managerTier =
      this.getManagerTier(
        managerRep
      );

    const clubTier =
      this.getClubTier(
        clubRep
      );

    const matrix = {

      SMALL: [

        [63000, 80000],
        [70000, 90000],
        [80000, 100000],
        [90000, 120000],
        [110000, 150000],
        [140000, 190000],
        [180000, 250000],
        [220000, 300000],

      ],

      LOWER: [

        [70000, 95000],
        [80000, 110000],
        [95000, 130000],
        [120000, 170000],
        [160000, 220000],
        [220000, 300000],
        [280000, 380000],
        [350000, 450000],

      ],

      MID: [

        [85000, 120000],
        [100000, 150000],
        [130000, 200000],
        [180000, 280000],
        [260000, 400000],
        [380000, 550000],
        [500000, 700000],
        [650000, 900000],

      ],

      EUROPEAN: [

        [110000, 170000],
        [140000, 220000],
        [200000, 320000],
        [300000, 500000],
        [450000, 700000],
        [650000, 1000000],
        [900000, 1500000],
        [1200000, 2000000],

      ],

      TITLE: [

        [180000, 280000],
        [240000, 380000],
        [350000, 550000],
        [500000, 850000],
        [800000, 1400000],
        [1300000, 2500000],
        [2000000, 4000000],
        [3000000, 6000000],

      ],

      ELITE: [

        [250000, 400000],
        [350000, 550000],
        [500000, 900000],
        [900000, 1600000],
        [1500000, 3000000],
        [2800000, 5000000],
        [4500000, 8000000],
        [7000000, 12000000],

      ],

    };

    return matrix[
      clubTier
    ][
      managerTier
    ];

  }

  private getClubTier(
    reputation: number
  ) {

    if (reputation >= 90)
      return "ELITE";

    if (reputation >= 82)
      return "TITLE";

    if (reputation >= 75)
      return "EUROPEAN";

    if (reputation >= 60)
      return "MID";

    if (reputation >= 40)
      return "LOWER";

    return "SMALL";

  }

  private getManagerTier(
    reputation: number
  ): number {

    if (reputation <= 10)
      return 0;

    if (reputation <= 20)
      return 1;

    if (reputation <= 35)
      return 2;

    if (reputation <= 50)
      return 3;

    if (reputation <= 65)
      return 4;

    if (reputation <= 80)
      return 5;

    if (reputation <= 90)
      return 6;

    return 7;

  }

  private getCurrency(
    leagueId: number
  ): "€" | "£" | "$" {

    if (
      leagueId === 1 ||
      leagueId === 7 ||
      leagueId === 13
    ) {

      return "£";

    }

    if (
      leagueId === 8 ||
      leagueId === 9 ||
      leagueId === 10
    ) {

      return "$";

    }

    return "€";

  }

  private random(
    min: number,
    max: number
  ): number {

    return Math.floor(
      Math.random() *
      (max - min + 1)
    ) + min;

  }

}
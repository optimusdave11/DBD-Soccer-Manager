import {
  Contract,
  ManagerContract,
  PlayerContract,
} from "./ContractTypes";

import { ManagerContractGenerator } from "./ManagerContractGenerator";
import { PlayerContractGenerator } from "./PlayerContractGenerator";

export class ContractManager {

  private readonly managerGenerator =
    new ManagerContractGenerator();

  private readonly playerGenerator =
    new PlayerContractGenerator();

  generateManagerContract(
    clubId: string,
    reputation: number
  ): ManagerContract {

    return this.managerGenerator.generate(
      clubId,
      reputation
    );

  }

  generatePlayerContract(
    playerId: string,
    clubId: string
  ): PlayerContract {

    return this.playerGenerator.generate(
      playerId,
      clubId
    );

  }

  extendContract(
    contract: Contract,
    years: number,
    salary: number
  ): Contract {

    return {

      ...contract,

      startDate:
        new Date(),

      endDate:
        new Date(
          new Date().getFullYear() + years,
          new Date().getMonth(),
          new Date().getDate()
        ),

      years,

      salary,

    };

  }

  isExpiring(
    contract: Contract,
    date: Date
  ): boolean {

    return (
      contract.endDate <= date
    );

  }

}

export const contractManager =
  new ContractManager();
import {
  Contract,
} from "./ContractTypes";

export class ContractDatabase {

  private contracts:
    Contract[] = [];

  add(
    contract: Contract
  ): void {

    this.contracts.push(
      contract
    );

  }

  remove(
    contractId: string
  ): void {

    this.contracts =
      this.contracts.filter(
        contract =>
          contract.id !== contractId
      );

  }

  update(
    contract: Contract
  ): void {

    const index =
      this.contracts.findIndex(
        c => c.id === contract.id
      );

    if (index === -1) {
      return;
    }

    this.contracts[index] =
      contract;

  }

  get(
    contractId: string
  ): Contract | undefined {

    return this.contracts.find(
      contract =>
        contract.id === contractId
    );

  }

  getByClub(
    clubId: string
  ): Contract[] {

    return this.contracts.filter(
      contract =>
        contract.clubId === clubId
    );

  }

  getByPerson(
    personId: string
  ): Contract | undefined {

    return this.contracts.find(
      contract =>
        contract.personId === personId
    );

  }

  getAll():
    Contract[] {

    return [
      ...this.contracts
    ];

  }

  clear(): void {

    this.contracts = [];

  }

}

export const contractDatabase =
  new ContractDatabase();
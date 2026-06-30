export type ContractType =
  | "PLAYER"
  | "MANAGER";

export type SquadStatus =
  | "STAR_PLAYER"
  | "IMPORTANT_PLAYER"
  | "FIRST_TEAM"
  | "ROTATION"
  | "PROSPECT";

export interface Contract {

  id: string;

  type: ContractType;

  personId: string;

  clubId: string;

  startDate: Date;

  endDate: Date;

  years: number;

  salary: number;

  currency: "€" | "£" | "$";

  signingBonus?: number;

  loyaltyBonus?: number;

  releaseClause?: number;

  squadStatus?: SquadStatus;

}

export interface ManagerContract
  extends Contract {

  type: "MANAGER";

  boardObjective: string;

  secondaryObjectives: string[];

}

export interface PlayerContract
  extends Contract {

  type: "PLAYER";

  squadStatus: SquadStatus;

}

export interface ContractOffer {

  contract:
    PlayerContract |
    ManagerContract;

  negotiable: boolean;

}

export interface ContractRenewal {

  contractId: string;

  proposedSalary: number;

  proposedYears: number;

}

export interface ContractExpiry {

  contractId: string;

  expiryDate: Date;

}
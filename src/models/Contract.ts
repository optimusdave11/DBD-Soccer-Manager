import { ContractStatus } from "./enums";

export interface Contract {
  id: number;

    playerId: number;
      clubId: number;

        wage: number; // Weekly wage

          startDate: string;
            expiryDate: string;

              releaseClause?: number;

                signingBonus?: number;
                  loyaltyBonus?: number;

                    status: ContractStatus;

                      createdAt: string;
                        updatedAt: string;
                        }
import { ManagerStyle } from "./enums";

export interface Manager {
  id: number;

    firstName: string;
      lastName: string;

        age: number;

          nationalityId: number;

            clubId: number | null;

              reputation: number; // 0-100

                preferredFormation: string;

                  tacticalStyle: ManagerStyle;

                    attacking: number;   // 0-100
                      defending: number;   // 0-100
                        possession: number;  // 0-100
                          pressing: number;    // 0-100
                            discipline: number;  // 0-100
                              youth: number;       // 0-100

                                contractId: number | null;

                                  createdAt: string;
                                    updatedAt: string;
                                    }
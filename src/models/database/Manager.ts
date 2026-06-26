import { ManagerStyle } from "../shared/enums";

export interface Manager {
  id: number;

    firstName: string;
      lastName: string;

        age: number;

          nationalityId: number;

            reputation: number; // 0-100

              preferredFormation: string;

                tacticalStyle: ManagerStyle;

                  attacking: number;
                    defending: number;
                      possession: number;
                        pressing: number;
                          discipline: number;
                            youthDevelopment: number;
                            }
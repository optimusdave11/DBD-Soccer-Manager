import { Foot, Position } from "../shared/enums";

export interface Player {
  id: number;

    firstName: string;
      lastName: string;
        commonName?: string;

          age: number;

            nationalityId: number;

              clubId: number;
                leagueId: number;

                  position: Position;
                    secondaryPositions: Position[];

                      preferredFoot: Foot;

                        jerseyNumber: number;

                          overall: number;
                            potential: number;

                              value: number;
                                wage: number;

                                  contractExpiryYear: number;

                                    internationalReputation: number;

                                      pace: number;
                                        shooting: number;
                                          passing: number;
                                            dribbling: number;
                                              defending: number;
                                                physical: number;

                                                  professionalism: number;
                                                    ambition: number;
                                                      leadership: number;
                                                        loyalty: number;
                                                          injuryProneness: number;
                                                          }
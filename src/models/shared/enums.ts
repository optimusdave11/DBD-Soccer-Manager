export enum Position {
    GK = "GK",

      LB = "LB",
        CB = "CB",
          RB = "RB",

            LWB = "LWB",
              RWB = "RWB",

                CDM = "CDM",
                  CM = "CM",
                    CAM = "CAM",

                      LM = "LM",
                        RM = "RM",

                          LW = "LW",
                            RW = "RW",

                              CF = "CF",
                                ST = "ST",
                                }

                                export enum Foot {
                                  LEFT = "Left",
                                    RIGHT = "Right",
                                      BOTH = "Both",
                                      }

                                      export enum CompetitionType {
                                        LEAGUE = "League",
                                          DOMESTIC_CUP = "Domestic Cup",
                                            CONTINENTAL = "Continental",
                                              SUPER_CUP = "Super Cup",
                                                INTERNATIONAL = "International",
                                                }

                                                export enum TransferType {
                                                  PERMANENT = "Permanent",
                                                    LOAN = "Loan",
                                                      FREE = "Free",
                                                        PRE_CONTRACT = "Pre-Contract",
                                                        }

                                                        export enum TransferStatus {
                                                          LISTED = "Listed",
                                                            RUMOUR = "Rumour",
                                                              NEGOTIATING = "Negotiating",
                                                                AGREED = "Agreed",
                                                                  COMPLETED = "Completed",
                                                                    REJECTED = "Rejected",
                                                                      CANCELLED = "Cancelled",
                                                                      }

                                                                      export enum ContractStatus {
                                                                        ACTIVE = "Active",
                                                                          EXPIRING = "Expiring",
                                                                            EXPIRED = "Expired",
                                                                            }

                                                                            export enum PlayerStatus {
                                                                              AVAILABLE = "Available",
                                                                                INJURED = "Injured",
                                                                                  SUSPENDED = "Suspended",
                                                                                    ON_LOAN = "On Loan",
                                                                                      INTERNATIONAL_DUTY = "International Duty",
                                                                                        RETIRED = "Retired",
                                                                                        }

                                                                                        export enum MatchStatus {
                                                                                          SCHEDULED = "Scheduled",
                                                                                            LIVE = "Live",
                                                                                              FINISHED = "Finished",
                                                                                                POSTPONED = "Postponed",
                                                                                                  ABANDONED = "Abandoned",
                                                                                                  }

                                                                                                  export enum MatchResult {
                                                                                                    HOME_WIN = "Home Win",
                                                                                                      DRAW = "Draw",
                                                                                                        AWAY_WIN = "Away Win",
                                                                                                        }

                                                                                                        export enum Weather {
                                                                                                          CLEAR = "Clear",
                                                                                                            CLOUDY = "Cloudy",
                                                                                                              RAIN = "Rain",
                                                                                                                SNOW = "Snow",
                                                                                                                }

                                                                                                                export enum ManagerStyle {
                                                                                                                  POSSESSION = "Possession",
                                                                                                                    TIKI_TAKA = "Tiki-Taka",
                                                                                                                      GEGENPRESS = "Gegenpress",
                                                                                                                        COUNTER_ATTACK = "Counter Attack",
                                                                                                                          DIRECT = "Direct",
                                                                                                                            LONG_BALL = "Long Ball",
                                                                                                                              PARK_THE_BUS = "Park the Bus",
                                                                                                                                BALANCED = "Balanced",
                                                                                                                                }

                                                                                                                                export enum Currency {
                                                                                                                                  EUR = "EUR",
                                                                                                                                    GBP = "GBP",
                                                                                                                                      USD = "USD",
                                                                                                                                      }
}
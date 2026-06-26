import { CompetitionType } from "../shared/enums";

export interface Competition {
  id: number;

    name: string;

      type: CompetitionType;

        leagueId: number | null;

          reputation: number; // 0-100

            championPrizeMoney: number;
            }
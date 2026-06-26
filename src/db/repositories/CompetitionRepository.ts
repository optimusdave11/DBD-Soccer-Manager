import { BaseRepository } from "./BaseRepository";
import { STORES } from "../schema";
import type { Competition } from "../../models/database/Competition";

class CompetitionRepository extends BaseRepository<Competition> {
  constructor() {
      super(STORES.COMPETITIONS);
        }
        }

        export const competitionRepository = new CompetitionRepository();
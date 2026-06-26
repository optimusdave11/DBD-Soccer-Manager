import { BaseRepository } from "./BaseRepository";
import { STORES } from "../schema";
import type { League } from "../../models/database/League";

class LeagueRepository extends BaseRepository<League> {
  constructor() {
      super(STORES.LEAGUES);
        }
        }

        export const leagueRepository = new LeagueRepository();
import { BaseRepository } from "./BaseRepository";
import { STORES } from "../schema";
import type { SaveClub } from "../../models/save/Club";

class SaveClubRepository extends BaseRepository<SaveClub> {
  constructor() {
      super(STORES.SAVE_CLUBS);
        }
        }

        export const saveClubRepository = new SaveClubRepository();
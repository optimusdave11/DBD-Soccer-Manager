import { BaseRepository } from "./BaseRepository";
import { STORES } from "../schema";
import type { SavePlayer } from "../../models/save/Player";

class SavePlayerRepository extends BaseRepository<SavePlayer> {
  constructor() {
      super(STORES.SAVE_PLAYERS);
        }
        }

        export const savePlayerRepository = new SavePlayerRepository();
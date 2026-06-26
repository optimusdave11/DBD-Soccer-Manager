import { BaseRepository } from "./BaseRepository";
import { STORES } from "../schema";
import type { Player } from "../../models/database/Player";

class PlayerRepository extends BaseRepository<Player> {
  constructor() {
      super(STORES.PLAYERS);
        }
        }

        export const playerRepository = new PlayerRepository();
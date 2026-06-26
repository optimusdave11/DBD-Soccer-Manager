import { BaseRepository } from "./BaseRepository";
import { STORES } from "../schema";
import type { GameWorld } from "../../models/save/GameWorld";

class GameWorldRepository extends BaseRepository<GameWorld> {
  constructor() {
      super(STORES.GAME_WORLD);
        }
        }

        export const gameWorldRepository = new GameWorldRepository();
import { BaseRepository } from "./BaseRepository";
import { STORES } from "../schema";
import type { Nation } from "../../models/database/Nation";

class NationRepository extends BaseRepository<Nation> {
  constructor() {
      super(STORES.NATIONS);
        }
        }

        export const nationRepository = new NationRepository();
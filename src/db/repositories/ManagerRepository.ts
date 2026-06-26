import { BaseRepository } from "./BaseRepository";
import { STORES } from "../schema";
import type { Manager } from "../../models/database/Manager";

class ManagerRepository extends BaseRepository<Manager> {
  constructor() {
      super(STORES.MANAGERS);
        }
        }

        export const managerRepository = new ManagerRepository();
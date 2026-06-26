import { database } from "../db/Database";
import { STORES } from "../db/schema";

export class BudgetManager {

  async getTransferBudget(clubId: number): Promise<number> {

    const store = await database.getStore(STORES.CLUBS);

    const club = await store.get(clubId);

    if (!club) {
      throw new Error(`Club ${clubId} not found.`);
    }

    return club.transferBudget;

  }

  async getWageBudget(clubId: number): Promise<number> {

    const store = await database.getStore(STORES.CLUBS);

    const club = await store.get(clubId);

    if (!club) {
      throw new Error(`Club ${clubId} not found.`);
    }

    return club.wageBudget;

  }

  async setTransferBudget(
    clubId: number,
    budget: number
  ): Promise<void> {

    const store = await database.getStore(
      STORES.CLUBS,
      "readwrite"
    );

    const club = await store.get(clubId);

    if (!club) {
      throw new Error(`Club ${clubId} not found.`);
    }

    club.transferBudget = Math.max(0, budget);

    await store.put(club);

  }

  async setWageBudget(
    clubId: number,
    budget: number
  ): Promise<void> {

    const store = await database.getStore(
      STORES.CLUBS,
      "readwrite"
    );

    const club = await store.get(clubId);

    if (!club) {
      throw new Error(`Club ${clubId} not found.`);
    }

    club.wageBudget = Math.max(0, budget);

    await store.put(club);

  }

  async addTransferIncome(
    clubId: number,
    transferFee: number
  ): Promise<void> {

    const store = await database.getStore(
      STORES.CLUBS,
      "readwrite"
    );

    const club = await store.get(clubId);

    if (!club) {
      throw new Error(`Club ${clubId} not found.`);
    }

    // 80% rule
    club.transferBudget += transferFee * 0.8;

    await store.put(club);

  }

}

export const budgetManager =
  new BudgetManager();
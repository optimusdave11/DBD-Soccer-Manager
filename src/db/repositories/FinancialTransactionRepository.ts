import { database } from "../db/Database";
import { STORES } from "../db/schema";
import { Transaction } from "./Transaction";

export class FinancialTransactionRepository {

  async add(transaction: Transaction): Promise<void> {

    const store = await database.getStore(
      STORES.TRANSACTIONS,
      "readwrite"
    );

    await store.put(transaction);

  }

  async getByClub(
    clubId: number
  ): Promise<Transaction[]> {

    const store =
      await database.getStore(STORES.TRANSACTIONS);

    const index =
      store.index("clubId");

    return index.getAll(clubId);

  }

}

export const financialTransactionRepository =
  new FinancialTransactionRepository();
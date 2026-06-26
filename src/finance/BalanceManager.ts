import { database } from "../db/Database";
import { STORES } from "../db/schema";

import { Transaction } from "./Transaction";
import { TransactionResult } from "./TransactionResult";
import { TransactionType } from "./TransactionType";

export interface TransactionOptions {
  allowNegativeBalance?: boolean;
  logTransaction?: boolean;
}

export class BalanceManager {

  async getBalance(clubId: number): Promise<number> {
    const store = await database.getStore(STORES.CLUBS);

    const club = await store.get(clubId);

    if (!club) {
      throw new Error(`Club ${clubId} not found.`);
    }

    return club.balance;
  }

  async credit(
    clubId: number,
    amount: number,
    type: TransactionType,
    description: string,
    season: number,
    options: TransactionOptions = {}
  ): Promise<TransactionResult> {

    const store = await database.getStore(
      STORES.CLUBS,
      "readwrite"
    );

    const club = await store.get(clubId);

    if (!club) {
      throw new Error(`Club ${clubId} not found.`);
    }

    const previousBalance = club.balance;

    club.balance += amount;

    await store.put(club);

    if (options.logTransaction !== false) {
      await this.logTransaction({
        id: crypto.randomUUID(),
        clubId,
        amount,
        type,
        description,
        season,
        date: Date.now()
      });
    }

    return {
      success: true,
      previousBalance,
      newBalance: club.balance,
      amount
    };
  }

  async debit(
    clubId: number,
    amount: number,
    type: TransactionType,
    description: string,
    season: number,
    options: TransactionOptions = {}
  ): Promise<TransactionResult> {

    const store = await database.getStore(
      STORES.CLUBS,
      "readwrite"
    );

    const club = await store.get(clubId);

    if (!club) {
      throw new Error(`Club ${clubId} not found.`);
    }

    const previousBalance = club.balance;

    if (
      !options.allowNegativeBalance &&
      previousBalance < amount
    ) {
      return {
        success: false,
        previousBalance,
        newBalance: previousBalance,
        amount,
        message: "Insufficient funds."
      };
    }

    club.balance -= amount;

    await store.put(club);

    if (options.logTransaction !== false) {
      await this.logTransaction({
        id: crypto.randomUUID(),
        clubId,
        amount: -amount,
        type,
        description,
        season,
        date: Date.now()
      });
    }

    return {
      success: true,
      previousBalance,
      newBalance: club.balance,
      amount
    };
  }

  async transfer(
    fromClubId: number,
    toClubId: number,
    amount: number,
    description: string,
    season: number
  ): Promise<boolean> {

    const debit = await this.debit(
      fromClubId,
      amount,
      TransactionType.PLAYER_PURCHASE,
      description,
      season
    );

    if (!debit.success) {
      return false;
    }

    await this.credit(
      toClubId,
      amount,
      TransactionType.PLAYER_SALE,
      description,
      season
    );

    return true;
  }

  private async logTransaction(
    transaction: Transaction
  ): Promise<void> {

    const store = await database.getStore(
      STORES.TRANSACTIONS,
      "readwrite"
    );

    await store.put(transaction);

  }

}

export const balanceManager = new BalanceManager();
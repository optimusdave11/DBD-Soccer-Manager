import { TransactionType } from "./TransactionType";

export interface Transaction {

  id: string;

  clubId: number;

  amount: number;

  type: TransactionType;

  description: string;

  season: number;

  date: number;

}
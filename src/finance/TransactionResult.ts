export interface TransactionResult {
  success: boolean;

  previousBalance: number;

  newBalance: number;

  amount: number;

  message?: string;
}
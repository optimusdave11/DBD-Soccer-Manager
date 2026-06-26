export class PrizeMoneyCalculator {

  calculate(
    championPrize: number,
    percentage: number
  ): number {

    return Math.round(
      championPrize * percentage
    );

  }

}

export const prizeMoneyCalculator =
  new PrizeMoneyCalculator();
export class TicketPriceCalculator {

  calculate(
    baseTicketPrice: number,
    importanceMultiplier: number
  ): number {

    return Math.round(
      baseTicketPrice *
      importanceMultiplier
    );

  }

}

export const ticketPriceCalculator =
  new TicketPriceCalculator();
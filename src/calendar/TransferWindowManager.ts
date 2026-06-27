export class TransferWindowManager {

  isOpen(date: Date): boolean {

    const day = date.getDate();
    const month = date.getMonth() + 1;

    // Summer: 15 June - 1 September
    if (
      (month === 6 && day >= 15) ||
      month === 7 ||
      month === 8 ||
      (month === 9 && day === 1)
    ) {
      return true;
    }

    // Winter: 1 January - 1 February
    if (
      month === 1 ||
      (month === 2 && day === 1)
    ) {
      return true;
    }

    return false;

  }

}

export const transferWindowManager =
  new TransferWindowManager();
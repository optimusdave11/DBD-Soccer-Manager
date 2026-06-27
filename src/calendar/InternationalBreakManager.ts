export class InternationalBreakManager {

  isInternationalBreak(date: Date): boolean {

    const day = date.getDate();
    const month = date.getMonth() + 1;

    // Late September → Second week of October
    if (
      (month === 9 && day >= 24) ||
      (month === 10 && day <= 14)
    ) {
      return true;
    }

    // First week of November
    if (
      month === 11 &&
      day <= 7
    ) {
      return true;
    }

    // Last week of March
    if (
      month === 3 &&
      day >= 24
    ) {
      return true;
    }

    // Mid-June
    if (
      month === 6 &&
      day >= 8 &&
      day <= 18
    ) {
      return true;
    }

    return false;

  }

}

export const internationalBreakManager =
    new InternationalBreakManager();
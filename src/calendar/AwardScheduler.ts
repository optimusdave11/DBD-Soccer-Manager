export class AwardScheduler {

  isMonthlyAwards(date: Date): boolean {

    return date.getDate() === 1;

  }

  isBallonDor(date: Date): boolean {

    if (date.getMonth() !== 9) {
      return false;
    }

    if (date.getDay() !== 1) {
      return false;
    }

    return date.getDate() >= 15 &&
           date.getDate() <= 21;

  }

}
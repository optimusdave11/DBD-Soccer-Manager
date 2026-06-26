import { determinePunishment } from "./FFPPunishments";
import { ffpHistory } from "./FFPHistory";

export class FFPEngine {

  evaluate() {

    const records =
      ffpHistory.getLastThreeYears();

    const totalLoss = records.reduce(
      (sum, record) =>
        sum + Math.min(record.profitLoss, 0),
      0
    );

    return determinePunishment(
      Math.abs(totalLoss)
    );

  }

}

export const ffpEngine =
  new FFPEngine();
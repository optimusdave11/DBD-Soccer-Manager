export interface FFPRecord {

  season: number;

  income: number;

  expenses: number;

  profitLoss: number;

}

export class FFPHistory {

  private records: FFPRecord[] = [];

  add(record: FFPRecord): void {
    this.records.push(record);
  }

  getLastThreeYears(): FFPRecord[] {
    return this.records.slice(-3);
  }

}

export const ffpHistory = new FFPHistory();
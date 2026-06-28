export interface TransferWindowStatus {
  status: "OPEN" | "CLOSED" | "DEADLINE DAY";
  daysRemaining: number;
  deadlineDay: boolean;
}

export class TransferWindowManager {

  // keep every existing method

  public getStatus(date: Date): TransferWindowStatus {

    const year = date.getFullYear();

    const windows = [
      {
        start: new Date(year, 6, 1),   // Jul 1
        end: new Date(year, 7, 31),    // Aug 31
      },
      {
        start: new Date(year, 0, 1),   // Jan 1
        end: new Date(year, 0, 31),    // Jan 31
      },
    ];

    for (const window of windows) {

      if (date >= window.start && date <= window.end) {

        const ms =
          window.end.getTime() - date.getTime();

        const days =
          Math.ceil(ms / 86400000);

        return {
          status:
            days === 0
              ? "DEADLINE DAY"
              : "OPEN",

          daysRemaining: days,

          deadlineDay: days === 0,
        };
      }
    }

    return {
      status: "CLOSED",
      daysRemaining: 0,
      deadlineDay: false,
    };
  }
}
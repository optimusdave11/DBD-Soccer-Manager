import { GameDate } from "./GameDate";
import { eventScheduler } from "./EventScheduler";

export class CalendarEngine {

  constructor(
    private readonly gameDate: GameDate
  ) {}

  get currentDate(): GameDate {
    return this.gameDate;
  }

  async advanceDay(): Promise<void> {

    this.gameDate.advanceDay();

    await eventScheduler.execute(
      this.gameDate.date
    );

    // TODO: Autosave

  }

  async advanceWeek(): Promise<void> {

    for (let i = 0; i < 7; i++) {
      await this.advanceDay();
    }

  }

  async advanceMonth(): Promise<void> {

    const currentMonth = this.gameDate.month;

    while (this.gameDate.month === currentMonth) {
      await this.advanceDay();
    }

  }

  async advanceUntilNextMatch(
    hasMatch: (date: Date) => Promise<boolean>
  ): Promise<void> {

    while (!(await hasMatch(this.gameDate.date))) {
      await this.advanceDay();
    }

  }

}
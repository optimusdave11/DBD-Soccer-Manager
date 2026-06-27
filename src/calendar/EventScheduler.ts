import { CalendarEvent } from "./CalendarEvent";

export class EventScheduler {

  private events: CalendarEvent[] = [];

  register(event: CalendarEvent): void {

    this.events.push(event);

  }

  async execute(date: Date): Promise<void> {

    const today = this.events.filter(event =>
      event.date.toDateString() === date.toDateString()
    );

    for (const event of today) {

      await event.execute();

    }

  }

}

export const eventScheduler =
  new EventScheduler();
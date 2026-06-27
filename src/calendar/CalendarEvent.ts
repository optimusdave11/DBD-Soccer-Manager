export interface CalendarEvent {

  id: string;

  name: string;

  date: Date;

  execute(): Promise<void>;

}
export class GameDate {

  constructor(
    private currentDate: Date = new Date(2025, 6, 1) // 1 July 2025
  ) {}

  get date(): Date {
    return new Date(this.currentDate);
  }

  get day(): number {
    return this.currentDate.getDate();
  }

  get month(): number {
    return this.currentDate.getMonth() + 1;
  }

  get year(): number {
    return this.currentDate.getFullYear();
  }

  advanceDay(): void {
    this.currentDate.setDate(this.currentDate.getDate() + 1);
  }

  advanceWeek(): void {
    this.currentDate.setDate(this.currentDate.getDate() + 7);
  }

  advanceMonth(): void {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
  }

  format(): string {

    const day = String(this.day).padStart(2, "0");
    const month = String(this.month).padStart(2, "0");

    return `${day}/${month}/${this.year}`;

  }

}
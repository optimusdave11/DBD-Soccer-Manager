import { calendar } from "./calendar/Calendar";
import { saveGenerator } from "./save/SaveGenerator";

export class Engine {
  async createNewSave(
      saveName: string,
          userClubId: number
            ): Promise<void> {
                await saveGenerator.create(saveName, userClubId);
                  }

                    async loadSave(): Promise<void> {
                        // TODO
                          }

                            async getCurrentDate(): Promise<string> {
                                return calendar.getCurrentDate();
                                  }

                                    async setDate(date: string): Promise<void> {
                                        await calendar.setDate(date);
                                          }

                                            async advanceDay(): Promise<void> {
                                                await calendar.advanceDay();
                                                  }

                                                    async advanceToNextMatch(): Promise<void> {
                                                        // TODO
                                                          }

                                                            async simulateMatch(): Promise<void> {
                                                                // TODO
                                                                  }

                                                                    async simulateMatchday(): Promise<void> {
                                                                        // TODO
                                                                          }

                                                                            async simulateWeek(): Promise<void> {
                                                                                for (let i = 0; i < 7; i++) {
                                                                                      await this.advanceDay();
                                                                                          }
                                                                                            }

                                                                                              async simulateMonth(days = 30): Promise<void> {
                                                                                                  for (let i = 0; i < days; i++) {
                                                                                                        await this.advanceDay();
                                                                                                            }
                                                                                                              }

                                                                                                                async simulateSeason(): Promise<void> {
                                                                                                                    // TODO
                                                                                                                      }

                                                                                                                        async saveGame(): Promise<void> {
                                                                                                                            // TODO
                                                                                                                              }

                                                                                                                                async autosave(): Promise<void> {
                                                                                                                                    await this.saveGame();
                                                                                                                                      }
                                                                                                                                      }

                                                                                                                                      export const engine = new Engine();
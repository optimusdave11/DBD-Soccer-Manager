import { gameWorldRepository } from "../../db";
import { scheduler } from "./Scheduler";

export class Calendar {
  async advanceDay(): Promise<void> {
      const world = await gameWorldRepository.getById(1);

          if (!world) {
                throw new Error("Game world not found.");
                    }

                        const date = new Date(world.currentDate);

                            date.setDate(date.getDate() + 1);

                                world.currentDate = date.toISOString().split("T")[0];

                                    await gameWorldRepository.update(world);

                                        await scheduler.run();
                                          }

                                            async setDate(date: string): Promise<void> {
                                                const world = await gameWorldRepository.getById(1);

                                                    if (!world) {
                                                          throw new Error("Game world not found.");
                                                              }

                                                                  world.currentDate = date;

                                                                      await gameWorldRepository.update(world);
                                                                        }

                                                                          async getCurrentDate(): Promise<string> {
                                                                              const world = await gameWorldRepository.getById(1);

                                                                                  if (!world) {
                                                                                        throw new Error("Game world not found.");
                                                                                            }

                                                                                                return world.currentDate;
                                                                                                  }
                                                                                                  }

                                                                                                  export const calendar = new Calendar();
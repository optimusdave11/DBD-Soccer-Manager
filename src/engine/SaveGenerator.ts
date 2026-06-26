import { playerSaveGenerator } from "./PlayerSaveGenerator";
import { clubSaveGenerator } from "./ClubSaveGenerator";
import { worldGenerator } from "./WorldGenerator";

export class SaveGenerator {
  async create(saveName: string, userClubId: number) {
      await playerSaveGenerator.generate();

          await clubSaveGenerator.generate();

              await worldGenerator.generate({
                    saveName,
                          userClubId,
                              });
                                }
                                }

                                export const saveGenerator = new SaveGenerator();
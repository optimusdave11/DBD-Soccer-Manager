import type { Player } from "../models/database/Player";

import { playerSeeder } from "../seed/PlayerSeeder";

export class PlayerDatabase {

  private players: Player[] = [];

  async load(): Promise<void> {

    if (this.players.length) {
      return;
    }

    this.players =
      await playerSeeder.seed();

  }

  getAll(): Player[] {

    return this.players;

  }

  getPlayer(
    playerId: string
  ): Player | undefined {

    return this.players.find(
      player =>
        String(player.PlayerID) ===
        playerId
    );

  }

  getByClub(
    clubId: number
  ): Player[] {

    return this.players.filter(
      player =>
        player.ClubID ===
        clubId
    );

  }

}

export const playerDatabase =
  new PlayerDatabase();
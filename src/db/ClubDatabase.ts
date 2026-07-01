import type { Club } from "../models/database/Club";

import { clubSeeder } from "../seed/ClubSeeder";

export class ClubDatabase {

  private clubs: Club[] = [];

  async load(): Promise<void> {

    if (this.clubs.length) {
      return;
    }

    this.clubs =
      await clubSeeder.seed();

  }

  getAll(): Club[] {

    return this.clubs;

  }

  getClub(
    clubId: string
  ): Club | undefined {

    return this.clubs.find(
      club =>
        String(club.ClubID) ===
        clubId
    );

  }

  getByLeague(
    leagueId: number
  ): Club[] {

    return this.clubs.filter(
      club =>
        club.LeagueID ===
        leagueId
    );

  }

  getByNation(
    countryID: number
  ): Club[] {

    return this.clubs.filter(
      club =>
        club.countryID ===
        countryID
    );

  }

  getRandomMLSClub(
    excludeClubId: string
  ): Club | undefined {

    const clubs =
      this.getByLeague(8).filter(
        club =>
          String(club.ClubID) !==
          excludeClubId
      );

    if (!clubs.length) {
      return;
    }

    return clubs[
      Math.floor(
        Math.random() *
        clubs.length
      )
    ];

  }

  getRandomEuropeanClub(
    excludeClubId: string,
    excludeCountryId: number
  ): Club | undefined {

    const clubs =
      this.clubs.filter(
        club =>

          String(club.ClubID) !==
            excludeClubId &&

          club.countryID !==
            excludeCountryId &&

          (
            club.LeagueID <= 7 ||
            club.LeagueID === 12 ||
            club.LeagueID === 99
          )

      );

    if (!clubs.length) {
      return;
    }

    return clubs[
      Math.floor(
        Math.random() *
        clubs.length
      )
    ];

  }

}

export const clubDatabase =
  new ClubDatabase();
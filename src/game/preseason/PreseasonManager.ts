import { clubDatabase } from "../db/ClubDatabase";
import {
  fixtureManager,
  type Fixture,
} from "../fixtures/FixtureManager";

export type TourVenue =
  | "HOME"
  | "AWAY"
  | "NEUTRAL"
  | "BEHIND_CLOSED_DOORS";

export type FixtureType =
  | "WARM_UP"
  | "TOUR"
  | "FINAL_FRIENDLY";

export interface PreseasonFixture {
  date: Date;
  opponentId: string;
  venue: TourVenue;
  type: FixtureType;
}

export interface PreseasonTour {
  country: string;
  fixtures: PreseasonFixture[];
}

export interface PreseasonStatus {
  country: string;
  played: number;
  total: number;
  nextFixture: PreseasonFixture | null;
}

export class PreseasonManager {

  private readonly europeanCountries = [
    "Portugal",
    "Spain",
    "France",
    "Germany",
    "Italy",
    "Netherlands",
    "Belgium",
    "Austria",
    "Switzerland",
    "Denmark",
    "Sweden",
    "Norway",
  ];

  private readonly overseasCountries = [
    "USA",
    "Japan",
    "South Korea",
    "Singapore",
  ];

  private readonly FC_SEOUL_ID = "275";

  private currentTour:
    PreseasonTour | null = null;

  private played = 0;

  async generateTour(
    clubId: string,
    countryId: number,
    clubCountry: string,
    previousTourCountry?: string
  ): Promise<PreseasonTour> {

    await clubDatabase.load();

    const availableCountries = [

      ...this.europeanCountries.filter(
        c => c !== clubCountry
      ),

      ...this.overseasCountries,

    ].filter(
      c => c !== previousTourCountry
    );

    const country =
      availableCountries[
        Math.floor(
          Math.random() *
          availableCountries.length
        )
      ];

    const fixtures:
      PreseasonFixture[] = [];

    let julyDay = 3;

    fixtures.push({

      date: new Date(
        new Date().getFullYear(),
        6,
        julyDay
      ),

      opponentId:
        this.getRandomEuropeanOpponent(
          clubId,
          countryId
        ),

      venue:
        "BEHIND_CLOSED_DOORS",

      type:
        "WARM_UP",

    });

    julyDay += 6;

    const tourGames =
      Math.random() < 0.5
        ? 3
        : 4;

    for (
      let i = 0;
      i < tourGames;
      i++
    ) {

      fixtures.push({

        date: new Date(
          new Date().getFullYear(),
          6,
          julyDay
        ),

        opponentId:
          this.getTourOpponent(
            country,
            clubId,
            countryId
          ),

        venue:
          "NEUTRAL",

        type:
          "TOUR",

      });

      julyDay += 4;

    }

    const finalGames =
      Math.random() < 0.5
        ? 1
        : 2;

    for (
      let i = 0;
      i < finalGames;
      i++
    ) {

      fixtures.push({

        date: new Date(
          new Date().getFullYear(),
          7,
          2 + (i * 4)
        ),

        opponentId:
          this.getRandomEuropeanOpponent(
            clubId,
            countryId
          ),

        venue:
          Math.random() < 0.5
            ? "HOME"
            : "AWAY",

        type:
          "FINAL_FRIENDLY",

      });

    }

    this.played = 0;

    this.currentTour = {

      country,

      fixtures,

    };

    fixtureManager.clear();

    const schedule: Fixture[] =
      fixtures.map(
        (
          fixture,
          index
        ) => ({

          id:
            `PRE-${index + 1}`,

          date:
            fixture.date,

          homeClubId:
            fixture.venue === "AWAY"
              ? fixture.opponentId
              : clubId,

          awayClubId:
            fixture.venue === "AWAY"
              ? clubId
              : fixture.opponentId,

          competition:
            "PRESEASON",

          venue:
            fixture.venue,

          played:
            false,

        })
      );

    fixtureManager.addFixtures(
      schedule
    );

    return this.currentTour;

  }

  private getTourOpponent(
    country: string,
    clubId: string,
    countryId: number
  ): string {

    if (
      country ===
      "South Korea"
    ) {
      return this.FC_SEOUL_ID;
    }

    if (
      country ===
      "USA"
    ) {
      return this.getRandomMLSClub(
        clubId
      );
    }

    return this.getRandomEuropeanOpponent(
      clubId,
      countryId
    );

  }
  
  private getRandomMLSClub(
    excludeClubId: string
  ): string {

    const club =
      clubDatabase.getRandomMLSClub(
        excludeClubId
      );

    return club
      ? String(club.ClubID)
      : "";

  }

  private getRandomEuropeanOpponent(
    excludeClubId: string,
    excludeCountryId: number
  ): string {

    const club =
      clubDatabase.getRandomEuropeanClub(
        excludeClubId,
        excludeCountryId
      );

    return club
      ? String(club.ClubID)
      : "";

  }

  recordFixturePlayed(): void {

    if (!this.currentTour) {
      return;
    }

    if (
      this.played <
      this.currentTour.fixtures.length
    ) {

      this.played++;

      const fixture =
        fixtureManager
          .getUpcomingFixtures(1)[0];

      if (fixture) {

        fixtureManager.markPlayed(
          fixture.id,
          0,
          0
        );

      }

    }

  }

  getFixtures():
    PreseasonFixture[] {

    return this.currentTour
      ? this.currentTour.fixtures
      : [];

  }

  getStatus():
    PreseasonStatus {

    if (!this.currentTour) {

      return {

        country: "",

        played: 0,

        total: 0,

        nextFixture: null,

      };

    }

    return {

      country:
        this.currentTour.country,

      played:
        this.played,

      total:
        this.currentTour.fixtures.length,

      nextFixture:
        this.currentTour.fixtures[
          this.played
        ] ?? null,

    };

  }

  reset(): void {

    this.currentTour = null;

    this.played = 0;

    fixtureManager.clear();

  }

}

export const preseasonManager =
  new PreseasonManager();
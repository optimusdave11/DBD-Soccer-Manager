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

  private currentTour: PreseasonTour | null = null;

  generateTour(
    clubCountry: string,
    previousTourCountry?: string
  ): PreseasonTour {

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
          Math.random() * availableCountries.length
        )
      ];

    const fixtures: PreseasonFixture[] = [];

    // Week 1
    fixtures.push({
      date: new Date(),
      opponentId: "",
      venue: "BEHIND_CLOSED_DOORS",
      type: "WARM_UP",
    });

    // Tour
    const tourGames =
      Math.random() < 0.5 ? 3 : 4;

    for (let i = 0; i < tourGames; i++) {

      fixtures.push({
        date: new Date(),
        opponentId: "",
        venue: "NEUTRAL",
        type: "TOUR",
      });

    }

    // Final week
    const finalFriendlies =
      Math.random() < 0.5 ? 1 : 2;

    for (let i = 0; i < finalFriendlies; i++) {

      fixtures.push({
        date: new Date(),
        opponentId: "",
        venue:
          Math.random() < 0.5
            ? "HOME"
            : "AWAY",
        type: "FINAL_FRIENDLY",
      });

    }

    this.currentTour = {
      country,
      fixtures,
    };

    return this.currentTour;

  }

  getStatus(): PreseasonStatus {

    if (!this.currentTour) {

      return {
        country: "",
        played: 0,
        total: 0,
        nextFixture: null,
      };

    }

    return {
      country: this.currentTour.country,
      played: 0,
      total: this.currentTour.fixtures.length,
      nextFixture:
        this.currentTour.fixtures[0] ?? null,
    };

  }

}

export const preseasonManager =
  new PreseasonManager();
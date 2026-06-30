import { clubDatabase } from "../db/ClubDatabase";
import { playerDatabase } from "../db/PlayerDatabase";

export interface JobOffer {
  clubId: string;
  club: string;
  leagueId: number;
  league: string;
  squadRating: number;
}

export class JobOfferManager {

  private readonly leagueNames: Record<number, string> = {

    1: "Premier League",
    2: "La Liga",
    3: "Bundesliga",
    4: "Serie A",
    5: "Ligue 1",
    6: "Eredivisie",
    7: "Scottish Premiership",
    8: "MLS",
    9: "Brasileirão",
    10: "Saudi Pro League",
    11: "Süper Lig",
    12: "Liga Portugal",
    13: "Championship",

  };

  async generateOffers():
    Promise<JobOffer[]> {

    await clubDatabase.load();
    await playerDatabase.load();

    const clubs =
      clubDatabase
        .getAll()
        .filter(
          c => c.LeagueID !== 99
        );

    const candidates: typeof clubs = [];

    const grouped =
      new Map<number, typeof clubs>();

    for (const club of clubs) {

      if (
        !grouped.has(club.LeagueID)
      ) {

        grouped.set(
          club.LeagueID,
          []
        );

      }

      grouped
        .get(club.LeagueID)!
        .push(club);

    }

    grouped.forEach(
      (leagueClubs, leagueId) => {

        leagueClubs.sort(
          (a, b) =>
            a.Reputation -
            b.Reputation
        );

        let amount = 10;

        switch (leagueId) {

          case 1:
          case 2:
          case 3:
          case 4:
          case 5:

            amount = 4;
            break;

          case 13:

            amount =
              leagueClubs.length;
            break;

          case 8:

            amount = 20;
            break;

          case 7:

            amount = 8;
            break;

        }

        candidates.push(
          ...leagueClubs.slice(
            0,
            amount
          )
        );

      }
    );

    const offers:
      JobOffer[] = [];

    const leagueCounts =
      new Map<number, number>();

    while (
      candidates.length > 0 &&
      offers.length < 4
    ) {

      const index =
        Math.floor(
          Math.random() *
          candidates.length
        );

      const club =
        candidates.splice(
          index,
          1
        )[0];

      const current =
        leagueCounts.get(
          club.LeagueID
        ) ?? 0;

      if (current >= 2) {
        continue;
      }

      const leaguesWithTwo =
        [...leagueCounts.values()]
          .filter(
            c => c === 2
          ).length;

      if (
        current === 1 &&
        leaguesWithTwo >= 1
      ) {
        continue;
      }

      leagueCounts.set(
        club.LeagueID,
        current + 1
      );

      offers.push({

        clubId:
          String(
            club.ClubID
          ),

        club:
          club.ClubName,

        leagueId:
          club.LeagueID,

        league:
          this.leagueNames[
            club.LeagueID
          ] ??
          `League ${club.LeagueID}`,

        squadRating:
          this.getAverageOVR(
            club.ClubID
          ),

      });

    }

    return offers;

  }

  private getAverageOVR(
    clubId: number
  ): number {

    const squad =
      playerDatabase
        .getAll()
        .filter(
          p =>
            p.ClubID ===
            clubId
        );

    if (
      squad.length === 0
    ) {
      return 0;
    }

    const total =
      squad.reduce(
        (sum, player) =>
          sum +
          player.overall,
        0
      );

    return Math.round(
      total /
      squad.length
    );

  }

}

export const jobOfferManager =
  new JobOfferManager();
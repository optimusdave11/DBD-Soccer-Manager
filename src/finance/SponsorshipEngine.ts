import { revenueEngine } from "./RevenueEngine";

export class SponsorshipEngine {

  async pay(
    clubId: number,
    amount: number,
    sponsor: string,
    season: number
  ) {

    return revenueEngine.sponsorship(
      clubId,
      amount,
      sponsor,
      season
    );

  }

}

export const sponsorshipEngine =
  new SponsorshipEngine();
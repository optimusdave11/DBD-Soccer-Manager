import { preseasonManager } from "../preseason/PreseasonManager";
import { transferWindowManager } from "../transfers/TransferWindowManager";

export interface HeroState {
  title: string;
  subtitle: string;
  objective: string;
}

export class HeroResolver {

  resolve(
    date: Date
  ): HeroState {

    const transfer =
      transferWindowManager.getStatus(
        date
      );

    if (
      transfer.status ===
      "DEADLINE DAY"
    ) {

      return {

        title:
          "Transfer Deadline Day",

        subtitle:
          "Final chance to strengthen your squad.",

        objective:
          "Complete all remaining transfer business before the window closes.",

      };

    }

    const preseason =
      preseasonManager.getStatus();

    if (
      preseason.total > 0 &&
      preseason.played <
        preseason.total
    ) {

      return {

        title:
          "Preseason Tour",

        subtitle:
          preseason.country,

        objective:
          preseason.nextFixture
            ? "Prepare your squad and build match fitness."
            : "Finish preseason strongly.",

      };

    }

    if (
      transfer.status ===
      "OPEN"
    ) {

      return {

        title:
          "Transfer Window",

        subtitle:
          `${transfer.daysRemaining} days remaining`,

        objective:
          "Improve your squad before the window closes.",

      };

    }

    return {

      title:
        "Club Season",

      subtitle:
        "No major events today.",

      objective:
        "Prepare for the next competitive fixture.",

    };

  }

}

export const heroResolver =
  new HeroResolver();
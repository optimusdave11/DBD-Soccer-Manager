import { preseasonManager } from "../preseason/PreseasonManager";
import { transferWindowManager } from "../transfers/TransferWindowManager";

export interface ContextState {
  title: string;
  subtitle: string;
}

export class ContextResolver {

  resolve(
    date: Date
  ): ContextState {

    const transfer =
      transferWindowManager.getStatus(
        date
      );

    if (
      transfer.status === "OPEN" ||
      transfer.status === "DEADLINE DAY"
    ) {

      return {

        title:
          transfer.status === "DEADLINE DAY"
            ? "Deadline Day"
            : "Transfer Window",

        subtitle:
          transfer.status === "DEADLINE DAY"
            ? "Final day of business."
            : `${transfer.daysRemaining} days remaining`,

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
          `Preseason Tour • ${preseason.country}`,

        subtitle:
          preseason.nextFixture
            ? `${preseason.played}/${preseason.total} matches played`
            : "Tour complete",

      };

    }

    return {

      title:
        "Club News",

      subtitle:
        "No breaking stories today.",

    };

  }

}

export const contextResolver =
  new ContextResolver();
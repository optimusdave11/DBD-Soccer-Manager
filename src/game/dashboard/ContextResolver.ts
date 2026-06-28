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

    if (transfer.status === "OPEN") {

      return {
        title: transfer.status,
        subtitle: `${transfer.daysRemaining} days remaining`,
      };

    }

    const preseason =
      preseasonManager.getStatus();

    if (
      preseason.total > 0 &&
      preseason.played < preseason.total
    ) {

      return {
        title: preseason.country,
        subtitle: `${preseason.played}/${preseason.total} matches played`,
      };

    }

    // Placeholder priorities

    return {
      title: "Top Story",
      subtitle: "No major events today.",
    };

  }

}

export const contextResolver =
  new ContextResolver();
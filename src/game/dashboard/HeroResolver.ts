export interface HeroState {
  title: string;
  subtitle: string;
  objective: string;
}

export class HeroResolver {

  resolve(
    date: Date
  ): HeroState {

    // Transfer Deadline Day
    if (
      date.getMonth() === 7 &&
      date.getDate() === 31
    ) {
      return {
        title: "Transfer Deadline Day",
        subtitle: "Final day of the summer window",
        objective: "Complete any remaining transfer business.",
      };
    }

    // Preseason
    if (
      date.getMonth() === 6 ||
      (date.getMonth() === 7 && date.getDate() <= 7)
    ) {
      return {
        title: "Preseason",
        subtitle: "Prepare your squad",
        objective: "Build match fitness before the new season.",
      };
    }

    // Season Start
    if (
      date.getMonth() === 7 &&
      date.getDate() >= 8 &&
      date.getDate() <= 15
    ) {
      return {
        title: "New Season",
        subtitle: "The campaign begins",
        objective: "Start the season strongly.",
      };
    }

    // Default
    return {
      title: "Manager",
      subtitle: "Club Season",
      objective: "Continue managing your club.",
    };

  }

}

export const heroResolver =
  new HeroResolver();
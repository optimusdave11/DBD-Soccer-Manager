import "./FixtureCard.css";

interface Props {
  date: string;
  opponent: string;
  competition: string;
  venue: "Home" | "Away";
}

export default function FixtureCard({
  date,
  opponent,
  competition,
  venue,
}: Props) {
  return (
    <div className="fixture-card">

      <div className="fixture-date">
        {date}
      </div>

      <div className="fixture-details">

        <h3>
          {venue === "Home" ? "vs" : "@"} {opponent}
        </h3>

        <p>{competition}</p>

      </div>

    </div>
  );
}
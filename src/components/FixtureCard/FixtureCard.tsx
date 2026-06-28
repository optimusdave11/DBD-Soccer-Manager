import "./FixtureCard.css";

interface Props {
  date: string;
  opponent: string;
  competition: string;
  venue: "Home" | "Away";

  score?: string;
  result?: "W" | "D" | "L";
  completed?: boolean;

  onClick?: () => void;
}

export default function FixtureCard({
  date,
  opponent,
  competition,
  venue,
  score,
  result,
  completed = false,
  onClick,
}: Props) {
  return (
    <div
      className="fixture-card"
      onClick={onClick}
    >

      <div className="fixture-date">
        {date}
      </div>

      <div className="fixture-details">

        <h3>
          {venue === "Home" ? "vs" : "@"} {opponent}
        </h3>

        <p>{competition}</p>

      </div>

      {completed && (
        <div className="fixture-result">

          <span
            className={`result-badge ${
              result?.toLowerCase()
            }`}
          >
            {result}
          </span>

          <span className="fixture-score">
            {score}
          </span>

        </div>
      )}

    </div>
  );
}
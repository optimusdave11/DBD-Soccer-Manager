import "./MatchCard.css";

interface Props {
  date: string;
  opponent: string;
  competition: string;
  venue: "Home" | "Away";
  played: boolean;
  score?: string;
}

export default function MatchCard({
  date,
  opponent,
  competition,
  venue,
  played,
  score,
}: Props) {
  return (
    <div className="match-card">

      <div className="match-date">
        {date}
      </div>

      <div className="match-details">

        <h3>
          {venue === "Home" ? "vs" : "@"} {opponent}
        </h3>

        <p>{competition}</p>

      </div>

      <div className="match-result">

        {played ? (
          <span>{score}</span>
        ) : (
          <span>-</span>
        )}

      </div>

    </div>
  );
}
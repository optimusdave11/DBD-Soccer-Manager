import "./PreseasonTourCard.css";

interface Props {
  country: string;
  played: number;
  total: number;
  nextOpponent?: string;
  daysUntilMatch?: number;
}

export default function PreseasonTourCard({
  country,
  played,
  total,
  nextOpponent,
  daysUntilMatch,
}: Props) {

  return (
    <section className="preseason-tour-card">

      <span className="preseason-tour-label">
        Preseason Tour
      </span>

      <h2>{country}</h2>

      <p>
        {played} / {total} matches played
      </p>

      {nextOpponent && (
        <div className="next-match">

          <strong>
            Next
          </strong>

          <span>
            vs {nextOpponent}
          </span>

          <small>
            {daysUntilMatch} day
            {daysUntilMatch !== 1 && "s"}
          </small>

        </div>
      )}

    </section>
  );

}
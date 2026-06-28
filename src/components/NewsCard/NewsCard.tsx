import "./NewsCard.css";

interface Props {
  headline: string;
  source: string;
  time: string;
  onClick?: () => void;
}

export default function NewsCard({
  headline,
  source,
  time,
  onClick,
}: Props) {
  return (
    <div
      className="news-card"
      onClick={onClick}
    >
      <h3>{headline}</h3>

      <div className="news-footer">

        <span>{source}</span>

        <span>{time}</span>

      </div>

    </div>
  );
}
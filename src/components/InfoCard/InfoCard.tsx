import "./InfoCard.css";

interface Props {
  title: string;
  value: string;
  subtitle?: string;
  onClick?: () => void;
}

export default function InfoCard({
  title,
  value,
  subtitle,
  onClick,
}: Props) {
  return (
    <div
      className="info-card"
      onClick={onClick}
    >
      <span className="info-title">
        {title}
      </span>

      <h3>{value}</h3>

      {subtitle && (
        <p>{subtitle}</p>
      )}
    </div>
  );
}
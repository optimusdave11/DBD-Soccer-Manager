import "./StatCard.css";

interface Props {
  label: string;
  value: string | number;
  accent?: boolean;
}

export default function StatCard({
  label,
  value,
  accent = false,
}: Props) {
  return (
    <div
      className={`stat-card ${
        accent ? "accent" : ""
      }`}
    >
      <span className="stat-label">
        {label}
      </span>

      <span className="stat-value">
        {value}
      </span>
    </div>
  );
}
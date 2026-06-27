import "./ProgressBar.css";

interface Props {
  value: number;
  max?: number;
}

export default function ProgressBar({
  value,
  max = 100,
}: Props) {
  const percentage = Math.min(
    100,
    Math.max(0, (value / max) * 100)
  );

  return (
    <div className="progress-bar">

      <div
        className="progress-fill"
        style={{
          width: `${percentage}%`,
        }}
      />

    </div>
  );
}
import "./SectionTitle.css";

interface Props {
  title: string;
  action?: string;
  onAction?: () => void;
}

export default function SectionTitle({
  title,
  action,
  onAction,
}: Props) {
  return (
    <div className="section-title">

      <h2>{title}</h2>

      {action && (
        <button
          className="section-action"
          onClick={onAction}
        >
          {action}
        </button>
      )}

    </div>
  );
}
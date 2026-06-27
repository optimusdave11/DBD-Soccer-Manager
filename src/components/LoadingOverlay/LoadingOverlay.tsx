import "./LoadingOverlay.css";

interface Props {
  visible: boolean;
  text?: string;
}

export default function LoadingOverlay({
  visible,
  text = "Loading...",
}: Props) {
  if (!visible) return null;

  return (
    <div className="loading-overlay">

      <div className="loading-box">

        <div className="loading-spinner" />

        <p>{text}</p>

      </div>

    </div>
  );
}
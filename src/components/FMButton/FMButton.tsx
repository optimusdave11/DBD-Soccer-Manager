import "./FMButton.css";

interface FMButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function FMButton({
  text,
  onClick,
  disabled,
}: FMButtonProps) {
  return (
    <button
      className="fm-button"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
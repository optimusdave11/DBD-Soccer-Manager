import "./ToggleSwitch.css";

interface Props {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function ToggleSwitch({
  label,
  checked,
  onChange,
}: Props) {
  return (
    <label className="toggle-switch">

      <span className="toggle-label">
        {label}
      </span>

      <button
        type="button"
        className={`toggle ${checked ? "active" : ""}`}
        onClick={() => onChange(!checked)}
      >
        <span className="toggle-thumb" />
      </button>

    </label>
  );
}
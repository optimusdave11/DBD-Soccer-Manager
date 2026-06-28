import "./Dropdown.css";

interface Option {
  value: string;
  label: string;
}

interface Props {
  label: string;
  value: string;
  options: Option[];
  onChange: (value: string) => void;
}

export default function Dropdown({
  label,
  value,
  options,
  onChange,
}: Props) {
  return (
    <div className="dropdown">

      <label>{label}</label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (

          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>

        ))}
      </select>

    </div>
  );
}
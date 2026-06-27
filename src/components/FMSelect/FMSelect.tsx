import "./FMSelect.css";

interface FMSelectProps {

  label: string;

  value: string;

  options: string[];

  onChange: (value: string) => void;

}

export default function FMSelect({

  label,

  value,

  options,

  onChange,

}: FMSelectProps) {

  return (

    <div className="fm-select">

      <label>{label}</label>

      <select

        value={value}

        onChange={(e) => onChange(e.target.value)}

      >

        {options.map(option => (

          <option

            key={option}

            value={option}

          >

            {option}

          </option>

        ))}

      </select>

    </div>

  );

}
import "./FMInput.css";

interface FMInputProps {

  label: string;

  value: string;

  placeholder?: string;

  onChange: (value: string) => void;

}

export default function FMInput({

  label,

  value,

  placeholder,

  onChange,

}: FMInputProps) {

  return (

    <div className="fm-input">

      <label>{label}</label>

      <input

        value={value}

        placeholder={placeholder}

        onChange={(e) => onChange(e.target.value)}

      />

    </div>

  );

}
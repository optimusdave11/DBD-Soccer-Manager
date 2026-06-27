import "./Input.css";

interface InputProps {

  label: string;

  value: string;

  placeholder?: string;

  onChange: (value: string) => void;

}

export default function Input({

  label,

  value,

  placeholder,

  onChange,

}: InputProps) {

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
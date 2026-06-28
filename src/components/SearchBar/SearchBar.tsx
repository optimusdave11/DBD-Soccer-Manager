import "./SearchBar.css";

interface Props {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  placeholder = "Search...",
  onChange,
}: Props) {
  return (
    <div className="search-bar">

      <span className="search-icon">
        🔍
      </span>

      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />

    </div>
  );
}
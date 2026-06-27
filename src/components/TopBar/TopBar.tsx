import "./TopBar.css";

interface Props {
  date: string;
  manager: string;
  club: string;
  balance: string;

  onMenu: () => void;
  onHome: () => void;
}

export default function TopBar({
  date,
  manager,
  club,
  balance,
  onMenu,
  onHome,
}: Props) {
  return (
    <header className="top-bar">

      <button
        className="top-bar-icon"
        onClick={onMenu}
      >
        ☰
      </button>

      <button
        className="top-bar-icon"
        onClick={onHome}
      >
        🏠
      </button>

      <div className="top-bar-info">

        <span>{date}</span>

        <span>{manager}</span>

        <span>{club}</span>

        <span>{balance}</span>

      </div>

    </header>
  );
}
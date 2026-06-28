import "./PlayerList.css";

interface Player {
  id: number;
  name: string;
  position: string;
  age: number;
  overall: number;
}

interface Props {
  players: Player[];
  onSelect?: (player: Player) => void;
}

export default function PlayerList({
  players,
  onSelect,
}: Props) {
  return (
    <div className="player-list">

      {players.map((player) => (

        <button
          key={player.id}
          className="player-row"
          onClick={() => onSelect?.(player)}
        >

          <div>

            <h3>{player.name}</h3>

            <span>{player.position}</span>

          </div>

          <div className="player-info">

            <span>{player.age}</span>

            <strong>{player.overall}</strong>

          </div>

        </button>

      ))}

    </div>
  );
}
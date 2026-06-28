import "./StandingsTable.css";

interface TeamRow {
  position: number;
  team: string;
  played: number;
  points: number;
}

interface Props {
  teams: TeamRow[];
}

export default function StandingsTable({
  teams,
}: Props) {
  return (
    <div className="standings-table">

      <table>

        <thead>

          <tr>
            <th>#</th>
            <th>Club</th>
            <th>P</th>
            <th>Pts</th>
          </tr>

        </thead>

        <tbody>

          {teams.map((team) => (

            <tr key={team.team}>

              <td>{team.position}</td>

              <td>{team.team}</td>

              <td>{team.played}</td>

              <td>{team.points}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}
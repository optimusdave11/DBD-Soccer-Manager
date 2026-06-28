import "./DataTable.css";

interface Column {
  key: string;
  title: string;
}

interface Row {
  [key: string]: string | number;
}

interface Props {
  columns: Column[];
  rows: Row[];
}

export default function DataTable({
  columns,
  rows,
}: Props) {
  return (
    <div className="data-table">

      <table>

        <thead>

          <tr>

            {columns.map((column) => (
              <th key={column.key}>
                {column.title}
              </th>
            ))}

          </tr>

        </thead>

        <tbody>

          {rows.map((row, index) => (

            <tr key={index}>

              {columns.map((column) => (

                <td key={column.key}>
                  {row[column.key]}
                </td>

              ))}

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}
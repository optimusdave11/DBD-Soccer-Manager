import "./TransferWindowCard.css";

interface Props {
  status: "OPEN" | "CLOSED" | "DEADLINE DAY";
  subtitle: string;
}

export default function TransferWindowCard({
  status,
  subtitle,
}: Props) {

  return (
    <section className="transfer-window-card">

      <span className="transfer-window-label">
        Transfer Window
      </span>

      <h2 className="transfer-window-status">
        {status}
      </h2>

      <p className="transfer-window-subtitle">
        {subtitle}
      </p>

    </section>
  );

}
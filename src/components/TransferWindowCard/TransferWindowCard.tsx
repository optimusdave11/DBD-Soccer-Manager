import "./TransferWindowCard.css";

interface Props {
  title: string;
  subtitle: string;
}

export default function TransferWindowCard({
  title,
  subtitle,
}: Props) {

  return (
    <section className="transfer-window-card">

      <span className="transfer-window-label">
        Current Focus
      </span>

      <h2 className="transfer-window-status">
        {title}
      </h2>

      <p className="transfer-window-subtitle">
        {subtitle}
      </p>

    </section>

  );

}
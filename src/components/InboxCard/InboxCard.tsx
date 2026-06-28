import "./InboxCard.css";

interface Props {
  sender: string;
  subject: string;
  date: string;
  unread?: boolean;
  onClick?: () => void;
}

export default function InboxCard({
  sender,
  subject,
  date,
  unread = false,
  onClick,
}: Props) {
  return (
    <div
      className={`inbox-card ${unread ? "unread" : ""}`}
      onClick={onClick}
    >
      <div className="inbox-main">

        <span className="inbox-sender">
          {sender}
        </span>

        <h3>{subject}</h3>

      </div>

      <span className="inbox-date">
        {date}
      </span>

    </div>
  );
}
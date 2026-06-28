import "./InboxCard.css";

interface Props {
  sender: string;
  subject: string;
  date: string;
  category?: string;
  unread?: boolean;
  onClick?: () => void;
}

export default function InboxCard({
  sender,
  subject,
  date,
  category,
  unread = false,
  onClick,
}: Props) {
  return (
    <div
      className={`inbox-card ${unread ? "unread" : ""}`}
      onClick={onClick}
    >
      <div className="inbox-top">

        <span className="inbox-sender">
          {sender}
        </span>

        <span className="inbox-date">
          {date}
        </span>

      </div>

      <div className="inbox-subject-row">

        <h3 className="inbox-subject">
          {subject}
        </h3>

        {category && (
          <span className="inbox-category">
            {category}
          </span>
        )}

      </div>

      {unread && <div className="unread-dot" />}

    </div>
  );
}
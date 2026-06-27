import "./NotificationBanner.css";

interface Props {
  text: string;
  variant?: "info" | "success" | "warning";
}

export default function NotificationBanner({
  text,
  variant = "info",
}: Props) {
  return (
    <div className={`notification-banner ${variant}`}>
      {text}
    </div>
  );
}
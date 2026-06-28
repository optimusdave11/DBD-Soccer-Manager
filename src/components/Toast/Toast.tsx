import "./Toast.css";

interface Props {
  visible: boolean;
  message: string;
  type?: "success" | "error" | "info";
}

export default function Toast({
  visible,
  message,
  type = "info",
}: Props) {
  if (!visible) return null;

  return (
    <div className={`toast ${type}`}>
      {message}
    </div>
  );
}
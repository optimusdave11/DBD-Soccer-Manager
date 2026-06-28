import "./Badge.css";

interface Props {
  text: string;

  variant?: "blue" | "green" | "red" | "yellow" | "grey";
}

export default function Badge({
  text,
  variant = "blue",
}: Props) {
  return (
    <span className={`badge ${variant}`}>
      {text}
    </span>
  );
}
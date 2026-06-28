import "./Spinner.css";

interface Props {
  size?: "small" | "medium" | "large";
}

export default function Spinner({
  size = "medium",
}: Props) {
  return (
    <div
      className={`spinner ${size}`}
    />
  );
}
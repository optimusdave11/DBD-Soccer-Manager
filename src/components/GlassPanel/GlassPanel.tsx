import "./GlassPanel.css";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function GlassPanel({
  children,
  className = "",
}: Props) {
  return (
    <div className={`glass-panel ${className}`}>
      {children}
    </div>
  );
}
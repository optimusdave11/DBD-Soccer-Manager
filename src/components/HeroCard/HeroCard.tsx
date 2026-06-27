import "./HeroCard.css";

interface Props {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function HeroCard({
  title,
  subtitle,
  children,
}: Props) {
  return (
    <section className="hero-card">

      <h2>{title}</h2>

      {subtitle && (
        <p className="hero-subtitle">
          {subtitle}
        </p>
      )}

      <div className="hero-content">
        {children}
      </div>

    </section>
  );
}
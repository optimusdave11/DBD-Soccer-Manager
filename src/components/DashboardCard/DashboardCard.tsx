import "./DashboardCard.css";

interface Props {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function DashboardCard({
  title,
  children,
  className = "",
}: Props) {
  return (
    <section className={`dashboard-card ${className}`}>

      <h3>{title}</h3>

      <div className="dashboard-card-content">
        {children}
      </div>

    </section>
  );
}
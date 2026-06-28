import TopBar from "../../components/TopBar/TopBar";
import HeroCard from "../../components/HeroCard/HeroCard";
import InfoCard from "../../components/InfoCard/InfoCard";
import DashboardCard from "../../components/DashboardCard/DashboardCard";

import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">

      <TopBar />

      <div className="dashboard-grid">

        <HeroCard />

        <div className="dashboard-right">

          <InfoCard
            title="Transfer Window"
            value="OPEN"
            subtitle="31 days remaining"
          />

          <InfoCard
            title="Preseason Tour"
            value="United States"
            subtitle="0 / 4 matches played"
          />

        </div>

      </div>

      <div className="dashboard-bottom">

        <DashboardCard title="Inbox" />

        <DashboardCard title="Recent Results" />

        <DashboardCard title="Upcoming Fixtures" />

      </div>

    </div>
  );
}
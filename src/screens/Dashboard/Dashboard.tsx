import { useState } from "react";

import FMLayout from "../../components/FMLayout/FMLayout";
import NavigationDrawer from "../../components/NavigationDrawer/NavigationDrawer";

import "./Dashboard.css";

export default function Dashboard() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <FMLayout>

      <NavigationDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />

      <header className="dashboard-topbar">

        <button
          className="menu-button"
          onClick={() => setDrawerOpen(true)}
        >
          ☰
        </button>

        <button className="home-button">
          🏠
        </button>

        <div className="topbar-info">

          <span>1 Jul 2025</span>

          <span>David Aisosa</span>

          <span>Burnley</span>

          <span>£65.2M</span>

        </div>

      </header>

      <main className="dashboard-grid">

        <section className="hero-card glass-card">

          <h2>Preseason Begins</h2>

          <p>
            Behind-Closed-Doors Friendly
          </p>

          <p>
            vs Blackburn
          </p>

          <p>
            4 July 2025
          </p>

        </section>

        <section className="glass-card">

          <h3>Transfer Window</h3>

          <p>Open</p>

          <small>15 Jun – 1 Sep</small>

        </section>

        <section className="glass-card">

          <h3>Preseason Tour</h3>

          <p>Japan</p>

          <small>Starts next week</small>

        </section>

        <section className="glass-card">

          <h3>Inbox</h3>

          <p>2 unread messages</p>

        </section>

        <section className="glass-card">

          <h3>Recent Results</h3>

          <p>No matches played.</p>

        </section>

        <section className="glass-card">

          <h3>Upcoming Fixtures</h3>

          <p>vs Blackburn</p>

          <p>vs Yokohama</p>

          <p>vs Celtic</p>

        </section>

      </main>

    </FMLayout>
  );
}
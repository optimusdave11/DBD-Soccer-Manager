import "./Dashboard.css";

import { dashboardManager } from "../../game/dashboard/DashboardManager";

import TopBar from "../../components/TopBar/TopBar";
import HeroCard from "../../components/HeroCard/HeroCard";
import TransferWindowCard from "../../components/TransferWindowCard/TransferWindowCard";
import PreseasonTourCard from "../../components/PreseasonTourCard/PreseasonTourCard";
import InboxCard from "../../components/InboxCard/InboxCard";
import FixtureCard from "../../components/FixtureCard/FixtureCard";

import Button from "../../components/Button/Button";

export default function Dashboard() {

  const state =
    dashboardManager.getState();

  return (
    <main className="dashboard">

      <TopBar />

      <section className="dashboard-top">

        <HeroCard
          title={state.hero.title}
          subtitle={state.hero.subtitle}
        >

          <div className="hero-objective">

            <span>
              Current Objective
            </span>

            <h3>
              {state.hero.objective}
            </h3>

          </div>

          <Button
            label="Continue"
            onClick={() => {}}
          />

        </HeroCard>

        <div className="dashboard-side">

          <TransferWindowCard
            status={state.transferWindow.status}
            subtitle={state.transferWindow.subtitle}
          />

          <PreseasonTourCard
            country={state.preseason.country}
            played={state.preseason.played}
            total={state.preseason.total}
            nextOpponent={
              state.preseason.nextOpponent ?? undefined
            }
            daysUntilMatch={
              state.preseason.daysUntilMatch ?? undefined
            }
          />

        </div>

      </section>

      <section className="dashboard-bottom">

        {state.inbox && (

          <InboxCard
            sender={state.inbox.sender}
            subject={state.inbox.subject}
            date={state.inbox.date}
            unread={state.inbox.unread}
          />

        )}

        <div className="results-card">

          <span className="card-title">
            Recent Results
          </span>

          {state.recentResults.map((fixture, index) => (

            <FixtureCard
              key={index}
              {...fixture}
            />

          ))}

        </div>

        <div className="fixtures-card">

          <span className="card-title">
            Upcoming Fixtures
          </span>

          {state.upcomingFixtures.map((fixture, index) => (

            <FixtureCard
              key={index}
              {...fixture}
            />

          ))}

        </div>

      </section>

    </main>
  );

}
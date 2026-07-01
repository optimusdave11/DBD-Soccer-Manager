import { useEffect } from "react";

import "./Dashboard.css";

import { dashboardManager } from "../../game/dashboard/DashboardManager";

import { clubDatabase } from "../../db/ClubDatabase";

import TopBar from "../../components/TopBar/TopBar";
import HeroCard from "../../components/HeroCard/HeroCard";
import TransferWindowCard from "../../components/TransferWindowCard/TransferWindowCard";
import InboxCard from "../../components/InboxCard/InboxCard";
import FixtureCard from "../../components/FixtureCard/FixtureCard";
import FMButton from "../../components/FMButton/FMButton";

export default function Dashboard() {

  const state =
    dashboardManager.getState();

  useEffect(() => {

    clubDatabase.load();

  }, []);

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

          <FMButton
            text="Continue"
            onClick={() => {}}
          />

        </HeroCard>

        <div className="dashboard-side">

          <TransferWindowCard
            title={state.context.title}
            subtitle={state.context.subtitle}
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

          {state.recentResults.map((fixture) => (

            <FixtureCard
              key={fixture.id}

              date={
                fixture.date.toLocaleDateString()
              }

              opponent={
                clubDatabase.getClub(
                  String(fixture.homeClubId)
                )?.ClubName ??
                "Unknown Club"
              }

              competition={
                fixture.competition
              }

              venue={
                fixture.venue === "HOME"
                  ? "Home"
                  : "Away"
              }

              completed={true}

              score={`${fixture.homeGoals}-${fixture.awayGoals}`}

              result={
                fixture.homeGoals! >
                fixture.awayGoals!
                  ? "W"
                  : fixture.homeGoals! <
                    fixture.awayGoals!
                  ? "L"
                  : "D"
              }

            />

          ))}

        </div>

        <div className="fixtures-card">

          <span className="card-title">
            Upcoming Fixtures
          </span>

          {state.upcomingFixtures.map((fixture) => (

            <FixtureCard
              key={fixture.id}

              date={
                fixture.date.toLocaleDateString()
              }

              opponent={
                clubDatabase.getClub(
                  String(fixture.homeClubId)
                )?.ClubName ??
                "Unknown Club"
              }

              competition={
                fixture.competition
              }

              venue={
                fixture.venue === "HOME"
                  ? "Home"
                  : "Away"
              }

            />

          ))}

        </div>

      </section>

    </main>

  );

}
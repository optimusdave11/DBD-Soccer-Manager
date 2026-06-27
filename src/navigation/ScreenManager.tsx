import { useState } from "react";

import MainMenu from "../screens/MainMenu/MainMenu";
import NewCareer from "../screens/NewCareer/NewCareer";
import JobOffers from "../screens/JobOffers/JobOffers";

type Screen =
  | "mainMenu"
  | "newCareer"
  | "jobOffers";

const dummyOffers = [
  {
    club: "Burnley",
    league: "Premier League",
    squadRating: 73,
  },
  {
    club: "Rennes",
    league: "Ligue 1",
    squadRating: 75,
  },
  {
    club: "Torino",
    league: "Serie A",
    squadRating: 74,
  },
  {
    club: "Mainz",
    league: "Bundesliga",
    squadRating: 76,
  },
];

export default function ScreenManager() {
  const [screen, setScreen] = useState<Screen>("mainMenu");

  switch (screen) {
    case "mainMenu":
      return (
        <MainMenu
          onNewCareer={() => setScreen("newCareer")}
        />
      );

    case "newCareer":
      return (
        <NewCareer
          onBack={() => setScreen("mainMenu")}
          onContinue={() => setScreen("jobOffers")}
        />
      );

    case "jobOffers":
      return (
        <JobOffers
          offers={dummyOffers}
          onBack={() => setScreen("newCareer")}
          onViewOffer={(offer) => {
            console.log(offer);
          }}
        />
      );

    default:
      return null;
  }
}
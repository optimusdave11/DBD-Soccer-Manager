import { useEffect, useState } from "react";

import MainMenu from "../screens/MainMenu/MainMenu";
import NewCareer from "../screens/NewCareer/NewCareer";
import JobOffers from "../screens/JobOffers/JobOffers";
import ManagerOffer from "../screens/ManagerOffer/ManagerOffer";
import Dashboard from "../screens/Dashboard/Dashboard";

// import { jobOfferManager } from "../game/joboffers/JobOfferManager";
import { contractManager } from "../game/contracts/ContractManager";
import { contractDatabase } from "../game/contracts/ContractDatabase";

type Screen =
  | "mainMenu"
  | "newCareer"
  | "jobOffers"
  | "managerOffer"
  | "dashboard";

export default function ScreenManager() {

  const [screen, setScreen] =
    useState<Screen>("mainMenu");

  const [offers, setOffers] =
    useState<any[]>([]);

  const [managerProfile, setManagerProfile] =
    useState<any>(null);

  const [selectedOffer, setSelectedOffer] =
    useState<any>(null);

  const [managerContract, setManagerContract] =
    useState<any>(null);

  useEffect(() => {

    if (screen !== "jobOffers") {
      return;
    }

    async function loadOffers() {

      setOffers([]);

    }

    loadOffers();

  }, [screen]);

  switch (screen) {

    case "mainMenu":

      return (

        <MainMenu

          openNewCareer={() =>
            setScreen("newCareer")
          }

          openLoadCareer={() => {
            // TODO
          }}

          openSettings={() => {
            // TODO
          }}

        />

      );

    case "newCareer":

      return (

        <NewCareer

          openMainMenu={() =>
            setScreen("mainMenu")
          }

          openJobOffers={(manager) => {

            setManagerProfile(manager);

            setScreen("jobOffers");

          }}

        />

      );

    case "jobOffers":

      return (

        <JobOffers

          offers={offers}

          onBack={() =>
            setScreen("newCareer")
          }

          onViewOffer={(offer) => {

            setSelectedOffer(offer);

            const contract =
              contractManager.generateManagerContract(

                offer.clubId,

                offer.reputation,

                managerProfile.reputation,

                offer.leagueId,

                offer.leagueRank

              );

            setManagerContract(contract);

            setScreen(
              "managerOffer"
            );

          }}

        />

      );

    case "managerOffer":

      return (

        <ManagerOffer

          contract={managerContract}

          clubName={
            selectedOffer.club
          }

          leagueName={
            selectedOffer.league
          }

          onAccept={() => {

            contract.personId =
              managerProfile.id;

            contractDatabase.add(
              managerContract
            );

            // TODO
            // Generate preseason
            // Generate inbox
            // Generate dashboard state
            // Generate save

            setScreen(
              "dashboard"
            );

          }}

          onReject={() =>
            setScreen("jobOffers")
          }

        />

      );

    case "dashboard":

      return <Dashboard />;

    default:

      return null;

  }

}
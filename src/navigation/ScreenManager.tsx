import { useState } from "react";

import { Screen } from "./Screen";

import MainMenu from "../screens/MainMenu/MainMenu";
import NewCareer from "../screens/NewCareer/NewCareer";
import LoadCareer from "../screens/LoadCareer/LoadCareer";
import Settings from "../screens/Settings/Settings";

export default function ScreenManager() {

  const [screen, setScreen] =
    useState(Screen.MAIN_MENU);

  switch (screen) {

    case Screen.NEW_CAREER:
      return (
        <NewCareer
          openMainMenu={() =>
            setScreen(Screen.MAIN_MENU)
          }
        />
      );

    case Screen.LOAD_CAREER:
      return (
        <LoadCareer
          openMainMenu={() =>
            setScreen(Screen.MAIN_MENU)
          }
        />
      );

    case Screen.SETTINGS:
      return (
        <Settings
          openMainMenu={() =>
            setScreen(Screen.MAIN_MENU)
          }
        />
      );

    default:
      return (
        <MainMenu
          openNewCareer={() =>
            setScreen(Screen.NEW_CAREER)
          }
          openLoadCareer={() =>
            setScreen(Screen.LOAD_CAREER)
          }
          openSettings={() =>
            setScreen(Screen.SETTINGS)
          }
        />
      );

  }

}
import FMLayout from "../../components/FMLayout/FMLayout";
import FMButton from "../../components/FMButton/FMButton";

import "./MainMenu.css";

interface Props {
  openNewCareer: () => void;
  openLoadCareer: () => void;
  openSettings: () => void;
}

export default function MainMenu({
  openNewCareer,
  openLoadCareer,
  openSettings,
}: Props) {

  return (

    <FMLayout>

      <div className="main-menu">

        <h1>Football Manager</h1>

        <div className="menu-buttons">

          <FMButton
            text="New Career"
            onClick={openNewCareer}
          />

          <FMButton
            text="Load Career"
            onClick={openLoadCareer}
          />

          <FMButton
            text="Settings"
            onClick={openSettings}
          />

        </div>

        <p className="version">
          Version 1.0.0
        </p>

      </div>

    </FMLayout>

  );

}
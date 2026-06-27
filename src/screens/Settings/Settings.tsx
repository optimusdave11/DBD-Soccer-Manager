import FMLayout from "../../components/FMLayout/FMLayout";

import "./Settings.css";

interface Props {
  openMainMenu: () => void;
}

export default function Settings({
  openMainMenu,
}: Props) {

  return (

    <FMLayout>

      <div className="settings">

        <div className="top-bar">

          <button
            className="back-button"
            onClick={openMainMenu}
            aria-label="Back"
          >
            ←
          </button>

        </div>

        <h1>Settings</h1>

        <div className="settings-card">

          <h2>Coming Soon</h2>

          <p>
            Game settings will be available here.
          </p>

        </div>

      </div>

    </FMLayout>

  );

}
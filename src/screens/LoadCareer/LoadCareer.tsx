import FMLayout from "../../components/FMLayout/FMLayout";

import "./LoadCareer.css";

interface Props {
  openMainMenu: () => void;
}

export default function LoadCareer({
  openMainMenu,
}: Props) {

  const saveSlots = Array.from({ length: 5 });

  return (

    <FMLayout>

      <div className="load-career">

        <div className="top-bar">

          <button
            className="back-button"
            onClick={openMainMenu}
            aria-label="Back"
          >
            ←
          </button>

        </div>

        <h1>Load Career</h1>

        <div className="save-slots">

          {saveSlots.map((_, index) => (

            <div
              key={index}
              className="save-card"
            >

              <div className="save-info">

                <h2>
                  Save Slot {index + 1}
                </h2>

                <p>Empty</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </FMLayout>

  );

}
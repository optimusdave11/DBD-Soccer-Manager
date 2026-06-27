import FMLayout from "../../components/FMLayout/FMLayout";
import FMButton from "../../components/FMButton/FMButton";

import "./ContractOffer.css";

interface Props {
  club: string;
  league: string;
  salary: string;
  duration: string;
  objectives: string[];

  onBack: () => void;
  onAccept: () => void;
}

export default function ContractOffer({
  club,
  league,
  salary,
  duration,
  objectives,
  onBack,
  onAccept,
}: Props) {
  return (
    <FMLayout>

      <button
        className="back-button"
        onClick={onBack}
      >
        ←
      </button>

      <div className="contract-offer">

        <h1>Contract Offer</h1>

        <div className="contract-card">

          <h2>{club}</h2>

          <p>{league}</p>

          <div className="contract-section">

            <h3>Contract Length</h3>

            <p>{duration}</p>

          </div>

          <div className="contract-section">

            <h3>Annual Salary</h3>

            <p>{salary}</p>

          </div>

          <div className="contract-section">

            <h3>Board Objectives</h3>

            <ul>

              {objectives.map((objective) => (
                <li key={objective}>{objective}</li>
              ))}

            </ul>

          </div>

          <FMButton
            text="Accept Contract"
            onClick={onAccept}
          />

        </div>

      </div>

    </FMLayout>
  );
}
import FMLayout from "../../components/FMLayout/FMLayout";
import FMButton from "../../components/FMButton/FMButton";

import {
  ManagerContract,
} from "../../game/contracts/ContractTypes";

import "./ManagerOffer.css";

interface Props {

  contract: ManagerContract;

  clubName: string;

  leagueName: string;

  onAccept: () => void;

  onReject: () => void;

}

export default function ManagerOffer({

  contract,

  clubName,

  leagueName,

  onAccept,

  onReject,

}: Props) {

  return (

    <FMLayout>

      <div className="manager-offer">

        <h1>
          Contract Offer
        </h1>

        <div className="offer-card">

          <h2>
            {clubName}
          </h2>

          <p>
            {leagueName}
          </p>

          <div className="offer-section">

            <span>
              Contract Length
            </span>

            <strong>
              {contract.years} Years
            </strong>

          </div>

          <div className="offer-section">

            <span>
              Annual Salary
            </span>

            <strong>

              {contract.currency}

              {contract.salary.toLocaleString()}

            </strong>

          </div>

          <div className="offer-section">

            <span>

              Expires

            </span>

            <strong>

              {contract.endDate.toLocaleDateString()}

            </strong>

          </div>

          <div className="offer-section">

            <span>

              Primary Objective

            </span>

            <p>

              {contract.boardObjective}

            </p>

          </div>

          <div className="offer-section">

            <span>

              Secondary Objectives

            </span>

            <ul>

              {contract.secondaryObjectives.map(

                objective => (

                  <li key={objective}>

                    {objective}

                  </li>

                )

              )}

            </ul>

          </div>

          {contract.signingBonus && (

            <div className="offer-section">

              <span>

                Signing Bonus

              </span>

              <strong>

                {contract.currency}

                {contract.signingBonus.toLocaleString()}

              </strong>

            </div>

          )}

          {contract.loyaltyBonus && (

            <div className="offer-section">

              <span>

                Loyalty Bonus

              </span>

              <strong>

                {contract.currency}

                {contract.loyaltyBonus.toLocaleString()}

              </strong>

            </div>

          )}

        </div>

        <div className="offer-buttons">

          <FMButton

            text="Accept Offer"

            onClick={onAccept}

          />

          <FMButton

            text="Reject Offer"

            onClick={onReject}

          />

        </div>

      </div>

    </FMLayout>

  );

}
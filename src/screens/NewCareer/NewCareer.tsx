import { useState } from "react";

import FMLayout from "../../components/FMLayout/FMLayout";
import FMButton from "../../components/FMButton/FMButton";
import FMInput from "../../components/FMInput/FMInput";
import FMSelect from "../../components/FMSelect/FMSelect";

import "./NewCareer.css";

interface Props {
  openMainMenu: () => void;
}

const TACTICAL_STYLES = [
  "Possession",
  "High Press",
  "Counter Attacking",
  "Low Block",
  "Direct Play",
  "Balanced",
];

const AGES = [
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
];

export default function NewCareer({
  openMainMenu,
}: Props) {

  const [managerName, setManagerName] =
    useState("");

  const [nationality, setNationality] =
    useState("Nigeria");

  const [age, setAge] =
    useState("35");

  const [tacticalStyle, setTacticalStyle] =
    useState("Balanced");

  const canContinue =
    managerName.trim().length > 0;

  return (

    <FMLayout>

      <div className="new-career">

        <div className="top-bar">

          <button
            className="back-button"
            onClick={openMainMenu}
            aria-label="Back"
          >
            ←
          </button>

        </div>

        <h1>New Career</h1>

        <div className="career-form">

          <FMInput
            label="Manager Name"
            value={managerName}
            placeholder="Enter your name"
            onChange={setManagerName}
          />

          <FMSelect
            label="Nationality"
            value={nationality}
            options={["Nigeria"]}
            onChange={setNationality}
          />

          <FMSelect
            label="Age"
            value={age}
            options={AGES}
            onChange={setAge}
          />

          <FMSelect
            label="Preferred Tactical Style"
            value={tacticalStyle}
            options={TACTICAL_STYLES}
            onChange={setTacticalStyle}
          />

          <FMButton
            text="Continue"
            disabled={!canContinue}
          />

        </div>

      </div>

    </FMLayout>

  );

}
import { useEffect, useState } from "react";

import FMLayout from "../../components/FMLayout/FMLayout";
import FMButton from "../../components/FMButton/FMButton";
import FMInput from "../../components/FMInput/FMInput";
import FMSelect from "../../components/FMSelect/FMSelect";

import { nationDatabase } from "../../game/db/NationDatabase";

import "./NewCareer.css";

interface Props {
  openMainMenu: () => void;
  openJobOffers: (manager: {
    name: string;
    nationality: string;
    age: number;
    tacticalStyle: string;
  }) => void;
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
  openJobOffers,
}: Props) {

  const [managerName, setManagerName] =
    useState("");

  const [nationalities, setNationalities] =
    useState<string[]>([]);

  const [nationality, setNationality] =
    useState("");

  const [age, setAge] =
    useState("35");

  const [tacticalStyle, setTacticalStyle] =
    useState("Balanced");

  useEffect(() => {

    async function loadNations() {

      await nationDatabase.load();

      const nations =
        nationDatabase
          .getAll()
          .map(n => n.Name)
          .sort();

      setNationalities(nations);

      if (nations.length > 0) {
        setNationality(nations[0]);
      }

    }

    loadNations();

  }, []);

  const canContinue =
    managerName.trim().length > 0 &&
    nationality !== "";

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
            options={nationalities}
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
            onClick={() =>
              openJobOffers({
                name: managerName.trim(),
                nationality,
                age: Number(age),
                tacticalStyle,
              })
            }
          />

        </div>

      </div>

    </FMLayout>

  );

}
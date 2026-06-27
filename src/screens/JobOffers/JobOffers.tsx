import FMLayout from "../../components/FMLayout/FMLayout";
import FMButton from "../../components/FMButton/FMButton";

import "./JobOffers.css";

interface JobOffer {
  club: string;
  league: string;
  squadRating: number;
}

interface Props {
  offers: JobOffer[];

  onBack: () => void;

  onViewOffer: (offer: JobOffer) => void;
}

export default function JobOffers({
  offers,
  onBack,
  onViewOffer,
}: Props) {
  return (
    <FMLayout>

      <button
        className="back-button"
        onClick={onBack}
      >
        ←
      </button>

      <div className="job-offers">

        <h1>Job Offers</h1>

        <p className="subtitle">
          Four clubs have expressed interest in appointing you.
        </p>

        <div className="offers-list">

          {offers.map((offer, index) => (

            <div
              key={offer.club}
              className="offer-card"
              style={{
                animationDelay: `${index * 120}ms`,
              }}
            >

              <h2>{offer.club}</h2>

              <p>{offer.league}</p>

              <p>
                Average Squad Rating: {offer.squadRating}
              </p>

              <FMButton
                text="View Offer"
                onClick={() => onViewOffer(offer)}
              />

            </div>

          ))}

        </div>

      </div>

    </FMLayout>
  );
}
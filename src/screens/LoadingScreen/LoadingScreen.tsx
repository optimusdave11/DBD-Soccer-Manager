import FMLayout from "../../components/FMLayout/FMLayout";

import "./LoadingScreen.css";

interface Props {
  progress: number;
  status: string;
}

export default function LoadingScreen({
  progress,
  status,
}: Props) {
  return (
    <FMLayout>

      <div className="loading-screen">

        <h1>Creating Career</h1>

        <p>{status}</p>

        <div className="progress-bar">

          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

        <span>{progress}%</span>

      </div>

    </FMLayout>
  );
}
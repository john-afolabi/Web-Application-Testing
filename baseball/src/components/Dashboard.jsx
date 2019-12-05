import React from "react";

export default function Dashboard({
  recordStrike,
  recordBall,
  recordFoul,
  recordHit
}) {
  return (
    <div>
      <button onClick={recordStrike} data-testid="strike-button">
        Strike
      </button>

      <button onClick={recordBall} data-testid="ball-button">
        Ball
      </button>

      <button onClick={recordFoul} data-testid="foul-button">
        Foul
      </button>

      <button onClick={recordHit} data-testid="hit-button">
        Hit
      </button>
    </div>
  );
}

import React from "react";

export default function Dashboard({
  recordStrike,
  recordBall,
  recordFoul,
  recordHit
}) {
  return (
    <div>
      <button onClick={recordStrike}>Strike</button>

      <button onClick={recordBall}>Ball</button>

      <button onClick={recordFoul}>Foul</button>

      <button onClick={recordHit}>Hit</button>
    </div>
  );
}

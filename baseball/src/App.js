import React, { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const resetBallsaAndStrikes = () => {
    setBalls(0);
    setStrikes(0);
  };

  const recordStrike = () => {
    strikes < 3 ? setStrikes(strikes + 1) : resetBallsaAndStrikes();
  };

  const recordBall = () => {
    balls < 4 ? setBalls(balls + 1) : resetBallsaAndStrikes();
  };

  const recordFoul = () => {
    strikes === 0 || strikes === 1 ? setStrikes(strikes + 1) :  setStrikes(strikes);
  };

  const recordHit = () => {
    resetBallsaAndStrikes();
  };

  return (
    <div className="App">
      <Display balls={balls} strikes={strikes} />
      <Dashboard
        recordStrike={recordStrike}
        recordBall={recordBall}
        recordFoul={recordFoul}
        recordHit={recordHit}
      />
    </div>
  );
}

export default App;

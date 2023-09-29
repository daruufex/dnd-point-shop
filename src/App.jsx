import { useState } from "react";
import defaults from "./defaults";
import StatList from "./components/StatList";

function App() {
  const maxPoints = defaults.maxPoints;
  const maxScore = defaults.maxScore;
  const scoreCosts = defaults.scoreCosts;

  const [points, setPoints] = useState(maxPoints);

  return (
    <div className="container mx-auto p-8 md:p-12">
      <h1 className="text-3xl">💰 D&D Point Shop</h1>
      <p className="p-2">
        🪙 Current points: {points}/{maxPoints}
      </p>
      <StatList
        points={points}
        maxPoints={maxPoints}
        maxScore={maxScore}
        scoreCosts={scoreCosts}
      />
    </div>
  );
}

export default App;

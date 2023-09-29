import { useState } from "react";
import defaults from "./defaults";
import StatList from "./components/StatList";

function App() {
  const startingPoints = defaults.startingPoints;
  const maxPoints = defaults.maxPoints;
  const maxScore = defaults.maxScore;
  const minScore = defaults.minScore;
  const scoreCosts = defaults.scoreCosts;

  const [points, setPoints] = useState(startingPoints);

  return (
    <div className="container mx-auto p-8 md:p-12">
      <h1 className="text-3xl">💰 D&D Point Shop</h1>
      <p className="p-2">
        🪙 Current points: {points}/{maxPoints}
      </p>
      <StatList
        points={points}
        setPoints={setPoints}
        maxPoints={maxPoints}
        maxScore={maxScore}
        minScore={minScore}
        scoreCosts={scoreCosts}
      />
    </div>
  );
}

export default App;

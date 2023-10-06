import { useState } from "react";
import AppContext from "./AppContext";
import defaults from "./defaults";
import Header from "./components/Header";
import StatList from "./components/StatList";

function App() {
  const startingPoints = defaults.startingPoints;
  const maxPoints = defaults.maxPoints;
  const maxScore = defaults.maxScore;
  const minScore = defaults.minScore;
  const scoreCosts = defaults.scoreCosts;

  const [points, setPoints] = useState(startingPoints);

  return (
    <AppContext.Provider
      value={{
        startingPoints,
        maxPoints,
        maxScore,
        minScore,
        scoreCosts,
        points,
        setPoints,
      }}
    >
      <div className="container max-w-3xl mx-auto p-2 md:p-4 pt-6 md:p-12">
        <Header />
        <StatList />
      </div>
    </AppContext.Provider>
  );
}

export default App;

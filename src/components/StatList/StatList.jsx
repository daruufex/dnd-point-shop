import Stat from "./Stat/Stat";

function StatList({
  points,
  setPoints,
  maxPoints,
  maxScore,
  minScore,
  scoreCosts,
}) {
  const statNames = [
    "Strength",
    "Dexterity",
    "Constitution",
    "Intelligence",
    "Wisdom",
    "Charisma",
  ];
  return (
    <table className="w-full text-md md:text-xl">
      <thead>
        <tr className="border-b-2 border-b-gray-600">
          <th className="p-2 md:p-3 text-left">Attribute</th>
          <th className="p-2 md:p-3 text-center">Ability score</th>
          <th className="p-2 md:p-3 text-center">Ancestry bonus</th>
          <th className="p-2 md:p-3 text-center">Final score</th>
        </tr>
      </thead>

      <tbody>
        {statNames.map((stat) => (
          <Stat
            name={stat}
            key={stat}
            points={points}
            setPoints={setPoints}
            maxPoints={maxPoints}
            maxScore={maxScore}
            minScore={minScore}
            scoreCosts={scoreCosts}
          />
        ))}
      </tbody>
    </table>
  );
}

export default StatList;

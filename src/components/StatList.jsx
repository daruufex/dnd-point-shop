import Stat from "./Stat";

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
    <table className="table-auto">
      <thead>
        <tr className="border-b-2 border-b-gray-600">
          {["Attribute", "Ability score", "Ancestry bonus", "Final score"].map(
            (heading, i) => (
              <th className="p-3 text-left" key={i}>
                {heading}
              </th>
            )
          )}
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

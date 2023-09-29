import { useState } from "react";

function Stat({ name, points, maxPoints, maxScore, scoreCosts }) {
  const [score, setScore] = useState(10);
  const [ancestryBonus, setAncestryBonus] = useState(0);

  const finalScore = score + ancestryBonus;
  const modifier = Math.ceil((finalScore - 10) / 2);

  const handleChangeAncestryBonus = (newValue) => {
    if (isNaN(newValue)) return;
    setAncestryBonus(newValue > 9 ? 0 : newValue);
  };

  const buttonStyles =
    "w-7 mr-1 border rounded border-gray-600 hover:bg-gray-700 active:bg-gray-900 transition-colors";

  return (
    <tr>
      <td className="p-3">{name}</td>
      <td className="p-3 flex justify-center items-center gap-4">
        {score}
        <div className="inline-flex flex-col items-start gap-2">
          <div className="whitespace-nowrap">
            <button className={`${buttonStyles}`}>+</button>
            <span className="text-xs">(-{scoreCosts[score]}🪙)</span>
          </div>
          <div>
            <button className={`${buttonStyles}`}>-</button>
            <span className="text-xs">(+{scoreCosts[score - 1]}🪙)</span>
          </div>
        </div>
      </td>
      <td className="p-3 text-center">
        <input
          className="bg-gray-800 p-2 rounded w-10 text-center"
          type="text"
          value={ancestryBonus}
          onChange={(e) => handleChangeAncestryBonus(Number(e.target.value))}
        />
      </td>
      <td className="p-3 text-center">
        {finalScore} ({modifier > 0 ? `+${modifier}` : modifier})
      </td>
    </tr>
  );
}

export default Stat;

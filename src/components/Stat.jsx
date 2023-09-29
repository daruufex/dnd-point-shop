import { useState } from "react";

function Stat({ name, points, setPoints, maxScore, minScore, scoreCosts }) {
  const [score, setScore] = useState(10);
  const [ancestryBonus, setAncestryBonus] = useState(0);

  const finalScore = score + ancestryBonus;
  const modifier = Math.floor((finalScore - 10) / 2);

  const handleIncreaseScore = () => {
    setScore((current) => current + 1);
    setPoints((current) => current - scoreCosts[score + 1]);
  };

  const handleDecreaseScore = () => {
    setScore((current) => current - 1);
    setPoints((current) => current + scoreCosts[score]);
  };

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
        <span
          className={
            score === maxScore
              ? "font-bold text-green-100"
              : score === minScore
              ? "italic text-red-200"
              : ""
          }
        >
          {score}
        </span>
        <div className="inline-flex flex-col items-start gap-2">
          <div className="whitespace-nowrap">
            <button
              className={`${buttonStyles}`}
              onClick={handleIncreaseScore}
              disabled={score === maxScore || scoreCosts[score + 1] > points}
            >
              +
            </button>
            <span
              className={`text-xs ${
                scoreCosts[score + 1] > points ? "text-red-400" : ""
              }`}
            >
              -{scoreCosts[score + 1]}🪙
            </span>
          </div>
          <div>
            <button
              className={`${buttonStyles}`}
              onClick={handleDecreaseScore}
              disabled={score === minScore}
            >
              -
            </button>
            <span className="text-xs">
              {score > minScore ? `+${scoreCosts[score]}🪙` : ""}
            </span>
          </div>
        </div>
      </td>
      <td className="p-3 text-center">
        +&nbsp;
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

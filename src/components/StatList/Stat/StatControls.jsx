import StatButton from "./StatButton";

function StatControls({
  score,
  scoreCosts,
  minScore,
  maxScore,
  points,
  onIncreaseScore,
  onDecreaseScore,
}) {
  return (
    <td className="p-2 md:p-3 flex justify-center items-center gap-4">
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
          <StatButton
            onClick={onIncreaseScore}
            disabled={score === maxScore || scoreCosts[score + 1] > points}
          >
            +
          </StatButton>
          <span
            className={`text-xs ${
              scoreCosts[score + 1] > points ? "text-red-400" : ""
            }`}
          >
            {score < maxScore ? `-${scoreCosts[score]}🪙` : ""}
          </span>
        </div>
        <div className="whitespace-nowrap">
          <StatButton onClick={onDecreaseScore} disabled={score === minScore}>
            +
          </StatButton>
          <span className="text-xs">
            {score > minScore ? `+${scoreCosts[score]}🪙` : ""}
          </span>
        </div>
      </div>
    </td>
  );
}

export default StatControls;

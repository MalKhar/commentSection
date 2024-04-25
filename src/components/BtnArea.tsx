import { useState } from "react";
import data from "../data/data.json";

function BtnArea() {
  const customData = data;
  let initialScore = customData.comments[0].score;
  var [score, setScore] = useState(initialScore);
  const upVote = () => setScore(score + 1);
  const downVote = () => setScore(score - 1);

  return (
    <>
      <div className="btnArea" id="btnArea">
        <button id="upvoteBtn" onClick={upVote}>
          +
        </button>
        <p className="scoreCount">{score}</p>
        <button id="downvoteBtn" onClick={downVote}>
          -
        </button>
      </div>
    </>
  );
}

export default BtnArea;

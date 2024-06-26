import React from "react";

const ResultPage = ({ questions, score }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold my-5">Result:</h1>
      {questions.length == score ? (
        <div className="ml-5 text-2xl font-bold ">
          Congratulations, You Got Full Score
        </div>
      ) : null}
      <div className="ml-5 text-2xl font-bold">
        Your Score is {score} out of {questions.length}
      </div>
    </div>
  );
};

export default ResultPage;

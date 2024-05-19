import React from "react";
import { useContext } from "react";
// import { AppContext } from "./App";
import DataContext from "../context/DataContext";

const DeleteQuestions = () => {
  const { questions, handleDelete, navigateHome } = useContext(DataContext);
  return (
    <div>
      {questions.length ? (
        <div className="m-5 ">
          {questions.map((questions) => (
            <div>
              <button
                onClick={() => handleDelete(questions.id)}
                className="font-bold "
              >
                {questions.questionText}{" "}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-10 font-bold">No Questions Found..</p>
      )}
      <button
        onClick={navigateHome}
        className="bg-white text-black border font-bold text-2xl px-4 py-2 ml-5"
      >
        Back
      </button>
      {/* <div>
        {questions.map((questions)=>questions.answers.map((answers) => (
          <div className="flex flex-wrap">
            <div>
              <label>{answers.ans1}</label>
            </div>
            <div>
              <label>{answers.ans2}</label>
            </div>
            <div>
              <label>{answers.ans3}</label>
            </div>
            <div>
              <label>{answers.ans4}</label>
            </div>
          </div>
        )))}
      </div> */}
    </div>
  );
};

export default DeleteQuestions;

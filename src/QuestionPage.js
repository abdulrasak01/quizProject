import React from "react";
import { useContext } from "react";
// import { AppContext } from "./App";
import DataContext from "../context/DataContext";

const QuestionPage = () => {
  const { questions, handleOptionClick, currentQuestion } =
    useContext(DataContext);
  return (
    <div>
      {questions.length ? (
        <div>
          <div className="m-5 ml-40">
            <span>
              <h1 className="font-bold text-2xl ">
                {questions[currentQuestion].questionText}
              </h1>
            </span>
          </div>
          <div className="m-5">
            <span>
              <div className="">
                <button
                  onClick={() =>
                    handleOptionClick(
                      questions[currentQuestion].answers[0].isCorrect
                    )
                  }
                  className="hover:bg-red-400  hover:text-white  my-4 ml-40  p-2 px-40"
                >{`I.  ${questions[currentQuestion].answers[0].ans1}`}</button>
                <button
                  onClick={() =>
                    handleOptionClick(
                      questions[currentQuestion].answers[1].isCorrect
                    )
                  }
                  className="hover:bg-red-400  hover:text-white  my-4 ml-40  p-2 px-40"
                >{`II.  ${questions[currentQuestion].answers[1].ans2}`}</button>
                <button
                  onClick={() =>
                    handleOptionClick(
                      questions[currentQuestion].answers[2].isCorrect
                    )
                  }
                  className="hover:bg-red-400  hover:text-white  my-4 ml-40  p-2 px-40"
                >{`III.  ${questions[currentQuestion].answers[2].ans3}`}</button>
                <button
                  onClick={() =>
                    handleOptionClick(
                      questions[currentQuestion].answers[3].isCorrect
                    )
                  }
                  className="hover:bg-red-400  hover:text-white  my-4 ml-40  p-2 px-40"
                >{`IV.  ${questions[currentQuestion].answers[3].ans4}`}</button>
              </div>
              {/* {questions[currentQuestion].answers.map((answers) => (
                  <div className="flex flex-wrap">
                  <button className=" hover:bg-red-400  hover:text-white  my-4 ml-40  p-2 px-40" onClick={()=>(handleOptionClick(answers.isCorrect))}>{answers.ans}</button>
                  </div>
                ))} */}
            </span>
          </div>
        </div>
      ) : (
        <p className="mt-10 font-bold">No Questions are Imported!</p>
      )}
    </div>
  );
};

export default QuestionPage;

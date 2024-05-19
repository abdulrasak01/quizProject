import { useContext } from "react";
// import { AppContext } from "./App";
import DataContext from "../context/DataContext";

const AddQuestion = () => {
  const { input, handleInput, handleSubmit, navigateHome } =
    useContext(DataContext);
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="optionDiv">
              <label>Enter Question:</label>
              <input
                className="optionInput"
                type="text"
                required
                name="questionText"
                value={input.questionText}
                onChange={handleInput}
              />
            </div>
            <div className="optionDiv">
              <label>Enter Option1:</label>
              <input
                className="optionInput"
                type="text"
                required
                name="ans1"
                value={input.ans1}
                onChange={handleInput}
              />
            </div>
            <div className="optionDiv">
              <label>Enter Option 2:</label>
              <input
                className="optionInput"
                type="text"
                required
                name="ans2"
                value={input.ans2}
                onChange={handleInput}
              />
            </div>
            <div className="optionDiv">
              <label>Enter Option 3:</label>
              <input
                className="optionInput"
                type="text"
                required
                name="ans3"
                value={input.ans3}
                onChange={handleInput}
              />
            </div>
            <div className="optionDiv">
              <label>Enter Option 4:</label>
              <input
                className="optionInput"
                type="text"
                required
                name="ans4"
                value={input.ans4}
                onChange={handleInput}
              />
            </div>
            <div className="optionDiv">
              <label>Type the Correct Option</label>
              <input
                className="optionInput"
                required
                type="text"
                placeholder="ex: 1 or 2 "
                name="ans"
                value={input.ans}
                onChange={handleInput}
              />
            </div>
            <button
              className="border bg-red-800 border-white text-red-300 font-bold text-3xl p-2 ml-40"
              type="submit"
            >
              Add Question
            </button>
          </div>
        </form>
        <button
          onClick={navigateHome}
          className="bg-white text-black border font-bold text-2xl px-4 py-2 ml-5"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default AddQuestion;

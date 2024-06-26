import ResultPage from "./ResultPage";
import React from "react";
import { useNavigate } from "react-router-dom";
import api from "./api/questions";
import { useState, useEffect } from "react";
import QuestionPage from "./QuestionPage";
import AddQuestion from "./AddQuestion";
import { Routes, Route } from "react-router-dom";
import Admin from "./Admin";
import DeleteQuestions from "./DeleteQuestions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrenQuestion] = useState(0);
  const [questions, setQuestions] = useState([
    // {
    //   questionText: "what was the answer of 1+1?",
    //   answers: [
    //     { ans1: 1, isCorrect: false },
    //     { ans2: 2, isCorrect: true },
    //     { ans3: 3, isCorrect: false },
    //     { ans4: 4, isCorrect: false },
    //   ],
    // },
  ]);
  const [input, setInput] = useState({
    questionText: "",
    ans1: "",
    ans2: "",
    ans3: "",
    ans4: "",
    ans: "",
  });
  const handleInput = (e) => {
    const { value, name } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const navigateHome = () => {
    navigate("/");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let bool1 = false;
    if (input.ans === "1") bool1 = true;
    let bool2 = false;
    if (input.ans === "2") bool2 = true;
    let bool3 = false;
    if (input.ans === "3") bool3 = true;
    let bool4 = false;
    if (input.ans === "4") bool4 = true;
 
    const Question = {
      questionText: input.questionText,
      answers: [
        { ans1: input.ans1, isCorrect: bool1 },
        { ans2: input.ans2, isCorrect: bool2 },
        { ans3: input.ans3, isCorrect: bool3 },
        { ans4: input.ans4, isCorrect: bool4 },
      ],
    };
    try {
      const response = await api.post("/questions", Question);
      const allQuestions = [...questions, response];
      setQuestions(allQuestions);
      toast.success('Question Added Successfully')
      setInput({
        questionText: "",
        ans1: "",
        ans2: "",
        ans3: "",
        ans4: "",
        ans: "",
      });
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.header);
      } else {
        console.log(err.message);
      }
    }
  };
  const [questionFinished, setQuestionFinished] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await api.get("/questions");
        setQuestions([...response.data]);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(err.message);
        }
      }
    };
    fetchQuestions();
  }, [questions]);
  const handleDelete = async (id) => {
    console.log(`/questions/${id}`);
    try {
      await api.delete(`/questions/${id}`);
      const deleteList = questions.filter((questions) => questions.id !== id);

      setQuestions(deleteList);
      toast.info('Question deleted')
      // navigate('/')
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleOptionClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    console.log(questions.length);
    if (questions.length - 1 > currentQuestion) {
      setCurrenQuestion(currentQuestion + 1);
    } else {
      setQuestionFinished(true);
    }
  };

  return (
    <div className="m-20 ">
           <ToastContainer theme='dark' position="top-center"

/>
      <div className="flex flex-wrap bg-red-500 mr-20 w-full p-20 border  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        {questionFinished ? (
          <div>
            <ResultPage questions={questions} score={score} />
          </div>
        ) : (
          <div>
            <h1 className="text-3xl ml-10 font-bold">Online Quiz</h1>
            <Routes>
              <Route
                path="/"
                element={
                  <QuestionPage
                    questions={questions}
                    handleOptionClick={handleOptionClick}
                    currentQuestion={currentQuestion}
                  />
                }
              />
              <Route
                path="/admin"
                element={<Admin navigateHome={navigateHome} />}
              />
              <Route
                path="/delete"
                element={
                  <DeleteQuestions
                    questions={questions}
                    handleDelete={handleDelete}
                    navigateHome={navigateHome}
                  />
                }
              />
              <Route
                path="/add"
                element={
                  <AddQuestion
                    input={input}
                    handleInput={handleInput}
                    handleSubmit={handleSubmit}
                    navigateHome={navigateHome}
                  />
                }
              />
            </Routes>
          </div>
        )}
      </div>
    </div>
    
  );
}

export default App;

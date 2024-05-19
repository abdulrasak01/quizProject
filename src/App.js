import { useEffect, useState } from "react";
import ResultPage from "./ResultPage";
import api from "./api/questions";
import QuestionPage from "./QuestionPage";
import AddQuestion from "./AddQuestion";
import { Routes, Route } from "react-router-dom";
import Admin from "./Admin";
import DeleteQuestions from "./DeleteQuestions";
import { useNavigate } from "react-router-dom";
import { DataProvider } from "../context/DataContext";

function App() {
  const { questionFinished } = useContext(DataContext);
 
  return (
    <div className="m-20 ">
      <DataProvider>
      
        <div className="flex flex-wrap bg-red-500 mr-20 w-full p-20 border  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          {questionFinished ? (
            <div>
              <ResultPage />
            </div>
          ) : (
            <div>
              <h1 className="text-3xl ml-10 font-bold">Online Quiz</h1>
              <Routes>
                <Route path="/" element={<QuestionPage />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/delete" element={<DeleteQuestions />} />
                <Route path="/add" element={<AddQuestion />} />
              </Routes>
            </div>
          )}
        </div>
        </DataProvider>
      {/* </AppContext.Provider> */}
    </div>
  );
}

export default App;

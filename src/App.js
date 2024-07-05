import { useState } from "react";
import "./App.css";
import FinalResult from "./Components/FinalResult";
import MainMenu from "./Components/MainMenu";
import QuizApp from "./Components/QuizApp";
import { QuizContext } from "./Context/QuizContext";


const App = () => {
  const [route, setRoute] = useState("menu");
  const [result,setResult] = useState(0);
  return (
    <div className="App">
      <QuizContext.Provider value={{route,setRoute,result,setResult}}>
      <h1>Welcome to world of quiz App🤞</h1>
      {route === "menu" && <MainMenu />}
      {route === "quiz" && <QuizApp />}
      {route === "result" && <FinalResult />}
      </QuizContext.Provider>
    </div>
  );
};

export default App;

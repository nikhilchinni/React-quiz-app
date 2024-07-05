import { useContext } from "react";
import { QuizContext } from "../Context/QuizContext";
import { entries } from "../Utils/entries";

const FinalResult = () => {
  const {result} = useContext(QuizContext);
  return (
    <div>
      Hoorah!!!!!!! you scored {result} out of {entries.length} 🎉🎉🎉🎉
    </div>
  );
};

export default FinalResult;

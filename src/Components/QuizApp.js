import { useContext, useState } from "react";
import { entries } from "../Utils/entries";
import { QuizContext } from "../Context/QuizContext";
const QuizApp = () => {
  const [currEntry, setCurrEntry] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState("");
  const [nextName, setnextName] = useState("Next");
  const { setResult, result, setRoute } = useContext(QuizContext);
  const handleOption = (e) => {
    setSelectedOption(e.target.value);
    setError("");
  };
  const handleNext = () => {
    if (!selectedOption) {
      setError("Please Select an option");
      return;
    }
    if (entries[currEntry].answer === selectedOption) {
      setResult(result + 1);
    }

    setSelectedOption("");
    setCurrEntry(currEntry + 1);

    if (currEntry === entries.length - 1) {
      setnextName("Submit");
      setRoute("result");
    }

    
  };
  return (
    <>
      {currEntry < entries.length && (
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <h2>{entries[currEntry].question}</h2>
            {entries[currEntry].options.map((option,index) => (
              <div>
                <label>
                  <input
                    type="radio"
                    key={index}
                    value={option}
                    checked={selectedOption === option}
                    onChange={(e) => handleOption(e)}
                  />
                  {option}
                </label>
              </div>
            ))}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button onClick={handleNext}>{nextName}</button>
          </form>
        </div>
      )}
    </>
  );
};
export default QuizApp;

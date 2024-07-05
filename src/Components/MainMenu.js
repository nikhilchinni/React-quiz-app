import { useContext } from "react";
import { QuizContext } from "../Context/QuizContext";

const MainMenu = () =>{
    const {setRoute}= useContext(QuizContext);
    return (
        <div>
            <button onClick={()=>setRoute("quiz")}style={{backgroundColor:"#f0f0f0"}}>Click to start 😊</button>
        </div>
    )
};

export default MainMenu;
import {useState} from "react";
import {questions} from "./ques.js"
import './style.css'
import Gamepage from "./components/Gamepage.jsx"

import "./index.css"

const Game=()=>{

    const[start,setStart]=useState(false);
    
    const startQuizBtn=()=>{    
        setStart(true)
    }





if(start===false){
return(
    <>
       <div className="modal" id="quizModal">
      <div className="modal-content">
        <h2>Test your Brain</h2>
        <p>Are Youuu Reaaadddyyy🔥?</p>
        <button onClick={startQuizBtn} id="startQuizBtn" >Start Quiz</button>
        {/* {startQuizBtn  && <Questionpage />} */}

      </div>
    </div>
    </>
)
}
else{
    return(
<>
<div class="app">
      <div class="main">
        <h1>Quiz</h1>
        <div class="scores">
          <p id="attempts">Attempts : 0</p>
          <p id="highscore">HighScore : 0</p>
        </div>
      </div>
      </div>
{questions.map((c,idx)=><Gamepage c={c} key={idx} questionNum={idx+1}/>)}


</>
    )

}

}

export {Game}
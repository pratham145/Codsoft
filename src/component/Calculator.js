import React, { useState } from "react";
import "./Calculator.css";

function Calculator(){
let [Answer, setAnswer] = useState("")
const handleClick = (event) =>{
  setAnswer(Answer.concat(event.target.value))
}
function clearResult(){
  setAnswer("");
}
function calculateresult(){
  setAnswer(eval(Answer).toString())
}
function delClick(){
  setAnswer(Answer.substring(0,Answer.length-1))
}
    
      
    return (   
      <div class="container">
      <div class="calculator">
        <input type="text" id="inputBox" placeholder="0" value={Answer} />
        <div>
          <button class="button operator" value="AC" onClick={clearResult}>AC</button>
          <button class="button operator" value="DEL" onClick={delClick}>DEL</button>
          <button class="button operator" value="%" onClick={handleClick}>%</button>
          <button class="button operator" value="/" onClick={handleClick}>/</button>
        </div>
        <div>
          <button class="button" value="7" onClick={handleClick}>7</button>
          <button class="button" value="8" onClick={handleClick}>8</button>
          <button class="button" value="9" onClick={handleClick}>9</button>
          <button class="button operator" value="*" onClick={handleClick}>*</button>
        </div>
        <div>
          <button class="button" value="4" onClick={handleClick}>4</button>
          <button class="button" value="5" onClick={handleClick}>5</button>
          <button class="button" value="6" onClick={handleClick}>6</button>
          <button class="button operator" value="-" onClick={handleClick}>-</button>
        </div>
        <div>
          <button class="button" value="1" onClick={handleClick}>1</button>
          <button class="button" value="2" onClick={handleClick}>2</button>
          <button class="button" value="3" onClick={handleClick} >3</button>
          <button class="button operator" value="+" onClick={handleClick}>+</button>
        </div>

        <div>
          <button class="button" value="00" onClick={handleClick}>00</button>
          <button class="button" value="0" onClick={handleClick}>0</button>
          <button class="button" value="." onClick={handleClick}>.</button>
          <button class="button equalBtn" value="=" onClick={calculateresult}>=</button>
        </div>
      </div>
    </div>

)
}    
export default Calculator;
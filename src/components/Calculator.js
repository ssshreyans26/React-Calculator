import React, { useState } from "react";
import Screen from "./Screen";
import Keyboard from "./Keyboard";

// eslint-disable-next-line
export default () => {
  const [input, setInput] = useState("");

  // Add Input
  const addInput = char => {
    var newInput = "";

    if (input != null && input.length === 0) {
      if (isNaN(Number(char))) {
        newInput = [...input];
        newInput += 0 + char;
        setInput(newInput);
        return;
      } else {
        newInput = [...input];
        newInput += char;
        setInput(newInput);
        return;
      }
    }

    newInput = input;
    newInput += char;
    setInput(newInput);
  };

  // Clear Input
  const clearInput = () => {
    setInput("");
  };

  //Calculate
  const calculate = () => {
    //Set Input to the returned eval
    try {
      setInput(evaluate(input));
    } catch (e) {
      console.log(e);
    }
  };

// eslint-disable-next-line
function evaluate(fn) {
    return new Function("return " + fn)();
  }

  return (
    <div className="calc">
      <div className="calcHeader">Calculator</div>
      <Screen input={input} />
      <Keyboard addInput={addInput} calculate={calculate} clearInput={clearInput}/>
      <div className="clearButton" onClick={clearInput}>
        Clear
      </div>
    </div>
  );
};
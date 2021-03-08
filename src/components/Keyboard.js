import React from "react";

// eslint-disable-next-line
export default ({ addInput, calculate, clearInput }) => {
  window.addEventListener('keydown', (event) => {
    var keyPress = event.key;
    var availableSelection = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '/', '+', '-', '%'];

    if (keyPress === '=') {
      calculate();
    }

    if (keyPress === 'c') {
      clearInput();
    }

    if (availableSelection.includes(keyPress)) {
        addInput(keyPress);
    }
  }, { once: true });
  
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flex: 1 }}>
        <div className="centerme">
          <div
            className="roundButton"
            onClick={() => {
              addInput("7");
            }}
          >
            7
          </div>
        </div>
        <div className="centerme">
          <div
            className="roundButton"
            onClick={() => {
              addInput("8");
            }}
          >
            8
          </div>
        </div>
        <div className="centerme">
          <div
            className="roundButton"
            onClick={() => {
              addInput("9");
            }}
          >
            9
          </div>
        </div>
        <div className="centerme">
          <div
            className="roundButton"
            onClick={() => {
              addInput("/");
            }}
          >
            ÷
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flex: 1 }}>
        <div className="centerme">
          <div
            className="roundButton"
            onClick={() => {
              addInput("4");
            }}
          >
            4
          </div>
        </div>
        <div className="centerme">
          <div
            className="roundButton"
            onClick={() => {
              addInput("5");
            }}
          >
            5
          </div>
        </div>
        <div className="centerme">
          <div
            className="roundButton"
            onClick={() => {
              addInput("6");
            }}
          >
            6
          </div>
        </div>
        <div className="centerme">
          <div
            className="roundButton"
            onClick={() => {
              addInput("*");
            }}
          >
            ×
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flex: 1 }}>
        <div className="centerme">
          <div
            className="roundButton"
            onClick={() => {
              addInput("1");
            }}
          >
            1
          </div>
        </div>
        <div className="centerme">
          <div
            className="roundButton"
            onClick={() => {
              addInput("2");
            }}
          >
            2
          </div>
        </div>
        <div className="centerme">
          <div
            className="roundButton"
            onClick={() => {
              addInput("3");
            }}
          >
            3
          </div>
        </div>
        <div className="centerme">
          <div
            className="roundButton"
            onClick={() => {
              addInput("-");
            }}
          >
            -
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flex: 1 }}>
        <div className="centerme">
          <div
            className="roundButton"
            onClick={() => {
              addInput("0");
            }}
          >
            0
          </div>
        </div>
        <div className="centerme">
          <div
            className="roundButton"
            onClick={() => {
              addInput(".");
            }}
          >
            .
          </div>
        </div>
        <div className="centerme">
          <div
            className="roundButton"
            onClick={() => {
              calculate();
            }}
          >
            =
          </div>
        </div>
        <div className="centerme">
          <div
            className="roundButton"
            onClick={() => {
              addInput("+");
            }}
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
};
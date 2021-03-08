import React from "react";

// eslint-disable-next-line
export default ({ addInput, calculate }) => {
    function handlekeyDown(e) {
        e.preventDefault();
        const current = e.key;
        const values = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/'];
        if (values.includes(current)) {
            let value = current;
            addInput((prev) => prev + value);
        }
    }
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flex: 1 }}>
        <div className="centerme">
          <div
            className="roundButton"
            onClick={() => {
              addInput("7");
            }}
            onKeyDown={(e) => handlekeyDown(e)}
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
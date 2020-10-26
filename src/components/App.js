import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px"
  });
  const reset = () => {
    console.log("Reset Game");
    setRenderBall(false);
    setBallPosition({
      left: "0px",
      top: "0px"
    });
  };
  const start = () => {
    console.log("Start Game");
    setRenderBall(true);
  };
  const renderChoice = () => {};

  const handleMovement1 = (event) => {
    if (
      event.keyCode !== 37 &&
      event.keyCode !== 38 &&
      event.keyCode !== 39 &&
      event.keyCode !== 40
    )
      return;
    console.log("keyPress :", event.key);
    console.log("initial pos=", ballPosition);
    let leftPos = parseInt(ballPosition.left.split("px")[0]);
    let topPos = parseInt(ballPosition.top.split("px")[0]);

    switch (event.keyCode) {
      case 37:
        leftPos -= 5;
        break;
      case 38:
        topPos -= 5;
        break;
      case 39:
        leftPos += 5;
        break;
      case 40:
        topPos += 5;
        break;
      default:
        break;
    }

    const newPos = {
      left: `${leftPos}px`,
      top: `${topPos}px`
    };
    console.log("final pos=", newPos);
    setBallPosition(newPos);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleMovement1);
    console.log("Listner added");

    return () => {
      document.removeEventListener("keydown", handleMovement1);
    };
  });
  return (
    <div className="playground">
      {renderBall === false ? (
        <button onClick={start} className="start">
          Start
        </button>
      ) : (
        <div className="ball" style={ballPosition}></div>
      )}
      <button onClick={reset} className="reset">
        Reset
      </button>

      {renderChoice()}
    </div>
  );
};

export default App;

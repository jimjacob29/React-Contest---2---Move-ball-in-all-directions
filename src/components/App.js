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
    setRenderBall(false);
    setX(0);
    setY(0);
    let obj = {};
    obj.left = "0px";
    obj.top = "0px";
    setBallPosition(obj);
  };

  const buttonStartClickHandler = () => {
    setRenderBall(true);
  };

  const renderChoice = () => {
    if (renderBall) {
      return <div className="ball" style={ballPosition}></div>;
    } else
      return (
        <button className="start" onClick={buttonStartClickHandler}>
          Start
        </button>
      );
  };
  const keyPressfn = (event) => {
    if ((event.key === "ArrowRight" || event.keyCode === 39) && renderBall) {
      const temp = x + 1;
      setX(temp);
      let obj = { ...ballPosition };
      obj.left = temp * 5 + "px";
      setBallPosition(obj);
    }
    if ((event.key === "ArrowLeft" || event.keyCode === 37) && renderBall) {
      const temp = x - 1;
      setX(temp);
      let obj = { ...ballPosition };
      obj.left = temp * 5 + "px";
      setBallPosition(obj);
    }
    if ((event.key === "ArrowUp" || event.keyCode === 38) && renderBall) {
      const temp = y - 1;
      setY(temp);
      let obj = { ...ballPosition };
      obj.top = temp * 5 + "px";
      setBallPosition(obj);
    }
    if ((event.key === "ArrowDown" || event.keyCode === 40) && renderBall) {
      const temp = y + 1;
      setY(temp);
      let obj = { ...ballPosition };
      obj.top = temp * 5 + "px";
      setBallPosition(obj);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyPressfn);

    return () => {
      document.removeEventListener("keydown", keyPressfn);
    };
  });

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;

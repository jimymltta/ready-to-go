import { span } from "prelude-ls";
import "./App.css";
// Import de useState
import { useState } from "react";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  const [switchOff, setSwitchOff] = useState(true);

  const changeState1 = () => {
    const newState = true;
    setSwitch1(newState);
  };

  const changeState2 = () => {
    const newState = true;
    setSwitch2(newState);
  };

  const changeState3 = () => {
    const newState = true;
    setSwitch3(newState);
  };

  const changeSwitchOff = () => {
    const newState = false;
    setSwitchOff(newState);
  };

  return (
    <div>
      <div className="switch1">
        <button onClick={changeState1}>ON</button>
        <button onClick={changeSwitchOff}>OFF</button>
      </div>

      <div className="switch2">
        <button onClick={changeState2}>ON</button>
        <button onClick={changeSwitchOff}>OFF</button>
      </div>

      <div className="switch3">
        <button onClick={changeState3}>ON</button>
        <button onClick={changeSwitchOff}>OFF</button>
      </div>

      <div className="result">
        {switch1 && switch2 && switch3 ? (
          <span>Go !</span>
        ) : (
          <span>No way !</span>
        )}
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";

function App() {
  let time = new Date().toLocaleTimeString();

  const [currentTime, setCurrentTime] = useState(time);

  function Time() {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  }
  return (
    <div className="App">
      <h1>{currentTime}</h1>
    </div>
  );
}

export default App;

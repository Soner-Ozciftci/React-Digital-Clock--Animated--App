import React, { useState } from "react";
import "./App.css";

function App() {
  let time = new Date().toLocaleDateString();

  const [currentTime, setCurrentTime] = useState(time);
  return (
    <div className="App">
      <h1>{currentTime}</h1>
    </div>
  );
}

export default App;

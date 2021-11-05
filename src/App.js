import React from "react";
import "./App.css";
import { initNotification } from "./services/firebaseservices";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <button onClick={initNotification}>Open Configuration</button>
    </div>
  );
}

export default App;

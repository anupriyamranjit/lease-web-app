
import React, {useState} from "react";
import './App.css';
import ReactDOM from "react-dom";

import MyMap from "./Components/Map/Map";

function App() {
  return (
    <div>
      <MyMap />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
/* eslint-disable */
import React from "react";
import "./App.css";
import Header from "./component/Header.tsx";
import Contents from "./component/Contents.tsx";
import Cursor from "./component/Cursor.tsx";

function App() {
  return (
    <div className="App">
      <div className="bg-container">
        <Cursor />
        <Header />
        <Contents />
      </div>
    </div>
  );
}

export default App;

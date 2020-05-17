import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { NewComment } from "../NewComment/NewComment";
import { Comments } from "../Comments/Comments";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <Comments />
      <NewComment />
    </div>
  );
}

export default App;

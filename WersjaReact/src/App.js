import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./imageSearch.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul type="tilelist" />
        </header>
      </div>
    );
  }
}

export default App;

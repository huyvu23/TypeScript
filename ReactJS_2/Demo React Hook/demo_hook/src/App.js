import React, { Component } from "react";
// import Demo2 from "./Component/Demo2";
import "./App.css";
// import Demo1 from "./Component/Demo1";
import GrandParentComponent from "./Context/GrandParentComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <br />
        <br />
        <GrandParentComponent />

        <br />
        <br />
      </div>
    );
  }
}

export default App;

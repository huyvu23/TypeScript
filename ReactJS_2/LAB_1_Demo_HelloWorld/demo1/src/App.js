import "./App.css";
import React from "react";

let styleDiv = {
  height: "200px",
  width: "200px",
  backgroundColor: "blue",
};

function App() {
  // khai báo hàm hanclick
  let handClick = () => {
    alert("Hello");
  };

  return (
    <div className="App">
      <h1> Hello VTI JSX </h1>

      <button type="button" onClick={handClick}>
        click me
      </button>
    </div>
  );
}

export default App;

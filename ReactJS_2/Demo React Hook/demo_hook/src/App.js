import React from "react";
// import Content from "./Component/Content";
// import TimerEffect from "./Component/TimerEffect";
// import EffectImage from "./Component/EffectImage";
import Layout from "./Component/Layout";
import { useState } from "react";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App" style={{ padding: 20 }}>
      <button onClick={() => setShow(!show)}>Show</button>
      {show && <Layout />}
    </div>
  );
}

export default App;

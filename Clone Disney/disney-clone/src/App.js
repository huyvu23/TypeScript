import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import Details from "./component/Details";
import Login from "./component/Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* // ! Trong bản cập nhật của ES6 Switch đưuọc thay thế Routes */}
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/detail/:id" element={<Details />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

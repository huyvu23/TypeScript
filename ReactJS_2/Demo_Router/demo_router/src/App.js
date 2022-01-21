import "./App.css";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import AccountManagement from "./Component/AccountManagement";
import DepartmentManagement from "./Component/DepartmentManagement";
import Login from "./Component/Login";
import Sign_Up from "./Component/Sign_Up";
import Error from "./Component/Error";
import AccountDetail from "./Component/AccountDetail";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-inverse" style={{ backgroundColor: "black", color: "white" }}>
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li>
              <NavLink to="/" activeStyle={{ backgroundColor: "blue" }}>
                VTI ACADEMY
              </NavLink>
            </li>
            <li>
              <NavLink to="/" activeStyle={{ backgroundColor: "yellow" }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/AccountManagement">AccountManagement</NavLink>
            </li>
            <li>
              <NavLink to="/DepartmentManagement">DepartmentManagement</NavLink>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <NavLink to="/Sign_Up">
                <span className="glyphicon glyphicon-user" /> Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink to="/Login">
                <span className="glyphicon glyphicon-log-in" /> Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      {/* End Menu */}

      {/* Khái báo đoạn Switch của router như bên dưới. */}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/AccountManagement" component={AccountManagement} />
        <Route path="/DepartmentManagement" component={DepartmentManagement} />
        <Route path="/Login" component={Login} />
        {/*đặt tên --- định nghĩa component chuyển đến  */}
        <Route path="/Sign_Up" component={Sign_Up} />
        <Route path="/AccountDetail/:ID" component={AccountDetail} />
        {/* nếu không có đường dẫn nào đúng sẽ chui vào component error */}
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;

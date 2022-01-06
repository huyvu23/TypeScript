import React, { Component } from "react";
import dataConText from "../Context/DataContext";

class ComponentsTopsChild extends Component {
  render() {
    return (
      <div>
        <dataConText.Consumer>{(data) => <h1>Dữ liệu :{data} </h1>}</dataConText.Consumer>
      </div>
    );
  }
}

export default ComponentsTopsChild;

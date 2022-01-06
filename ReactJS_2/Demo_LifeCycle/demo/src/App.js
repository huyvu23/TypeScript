import React, { Component } from "react";
import LifeCycle from "./Components/LifeCycle";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  deleteComponent = () => {
    this.setState({ show: false });
  };
  render() {
    let ComponentLifeCycle = "";
    if (this.state.show === true) {
      ComponentLifeCycle = <LifeCycle />;
    }
    return (
      <div className="App">
        {ComponentLifeCycle}

        <button type="button" class="btn btn-default" onClick={this.deleteComponent}>
          Delete
        </button>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

class Demo2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleClick = () => {
    let count = this.state.count;
    count = count + 1;
    this.setState({
      count: count,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <button type="button" className="btn btn-danger" onClick={this.handleClick}>
              Click
            </button>
          </div>

          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">Bạn đã click {this.state.count} lần</div>
        </div>
      </div>
    );
  }
}

export default Demo2;

import React, { Component } from "react";

// Life cycles chỉ có trong component
class LifeCycle extends Component {
  // các hàm có thể đảo nhau nhưng thứ tự chạy không thay đổi
  constructor(props) {
    super(props);
    console.log("Bước 1 : Gọi hàm Contructors");
    this.state = {
      message: "Hello VTI",
    };
  }

  // Khai báo state
  changeState = () => {
    this.setState({
      message: "Hello Huy",
    });
    console.log("Pha Updating ---- Bước 1 : Thực hiện thay đổi state sau khi nhấn change State");
  };

  render() {
    console.log("Bước 2 : Gọi hàm render");
    return (
      <div>
        <h1>{this.state.message}</h1>

        <button type="button" class="btn btn-default" onClick={this.changeState}>
          Change
        </button>
      </div>
    );
  }

  componentDidMount() {
    // call API
    console.log("Bước 3 : gọi hàm componentDidMount ");
  }
  shouldComponentUpdate(newProps, newState) {
    console.log(newProps);
    console.log(newState); // State mới : Hello Huy
    console.log("Pha Updating --- Bước 2 : Gọi đến shouldComponentUpdate");
    // sẽ phải return ra true hoặc phone
    // nếu là true : return đến componentDidUpdate
    // nếu là false : dừng lại

    if (newState.message === this.state.message) {
      return false; // ĐỪNG Rerender nữa
    } else {
      return true;
    }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(prevState); // State trước khi bị thay đổi : Hello VTI
    console.log("Bước 4:gọi đến componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Gọi hàm componentWillUnmount trước khi lifeCycles bị xóa");
  }
}

export default LifeCycle;

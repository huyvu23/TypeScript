import React, { Component } from "react";
import { Prompt } from "react-router-dom";

class Sign_Up extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Khai báo thêm các State để lưu trữ ở đây
      Full_Name: "",
      Email: "",
      Password: "",
      Re_Password: "",
      Birthday: "",
      isBlocking: false,
    };
  }

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let length = event.target.value.length; // kiểm tra các trường xem có dữ liệu hay không
    let isBlocking;
    if (length > 0) {
      isBlocking = true;
    } else {
      isBlocking = false;
    }
    this.setState({
      [name]: value,
      isBlocking: isBlocking,
    });
  };

  handleSubmit = (event) => {
    // name và value lấy theo các thuộc tính ở input
    let user = {
      Full_Name: this.state.Full_Name,
      Email: this.state.Email,
      Password: this.state.Password,
      Re_Password: this.state.Re_Password,
      Birthday: this.state.Birthday,
    };
    localStorage.setItem("user", JSON.stringify(user));
  };

  render() {
    return (
      <div className="container">
        {/* Hỏi trước khi chuyển trang thì thêm Prompt */}
        <Prompt when={this.state.isBlocking} message="Bạn có chắc chắn muốn thoát không ?" />
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <h3>Register System</h3>

            <div className="form-group">
              <label for="">Full Name: </label>
              <input
                type="text"
                required="true"
                className="form-control"
                id="Full_Name_ID"
                name="Full_Name"
                value={this.state.Full_Name}
                onChange={this.handleChange}
                placeholder="Enter FullName"
              />
            </div>
            <div className="form-group">
              <label for="">Email: </label>
              <input
                type="email"
                required="true"
                className="form-control"
                id="Email_ID"
                name="Email"
                value={this.state.Email}
                onChange={this.handleChange}
                placeholder="Enter Email"
              />
            </div>
            <div className="form-group">
              <label for="">Password: </label>
              <input
                type="password"
                required="true"
                className="form-control"
                id="Password_ID"
                name="Password"
                value={this.state.Password}
                onChange={this.handleChange}
                placeholder="Enter Password"
              />
            </div>
            <div className="form-group">
              <label for="">Confirmation Password: </label>
              <input
                type="password"
                required="true"
                className="form-control"
                id="Re_Password_ID"
                name="Re_Password"
                value={this.state.Re_Password}
                onChange={this.handleChange}
                placeholder="Enter Password"
              />
            </div>
            <div className="form-group">
              <label for="">Birthday: </label>
              <input
                type="date"
                required="true"
                className="form-control"
                id="Birthday_ID"
                name="Birthday"
                value={this.state.Birthday}
                onChange={this.handleChange}
                placeholder="Choose Birthday"
              />
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-success" onClick={this.handleSubmit} value="Register" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sign_Up;

import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Khai báo thêm các State để lưu trữ ở đây
      Email: "",
      Password: "",
      isRedirect: false,
    };
  }

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    // name và value lấy theo các thuộc tính ở input
    var user = JSON.parse(localStorage.getItem("user"));
    if (this.state.Email === user.Email && this.state.Password === user.Password) {
      alert("Đăng nhập thành công");
      let user_login = {
        Email: this.state.Email,
        Password: this.state.Password,
      };
      localStorage.setItem("user_login", JSON.stringify(user_login)); // Nếu đăng nhập thành công thì thực hiện lưu thông tin user_login xuống localStorage để xử lý
      //
      console.log(user_login);
      //
      this.setState({
        isRedirect: true, // set lại state này bằng true để thực hiện redirect
      });
    } else {
      alert("Kiểm tra lại thông tin");
    }
  };

  render() {
    if (this.state.isRedirect) {
      return <Redirect to="/AccountManagement" />;
    }
    //
    let user_login = JSON.parse(localStorage.getItem("user_login")); // check xem có thông tin ở local chưa , nếu chưa có sẽ bắt đăng nhập
    if (user_login) {
      return <Redirect to="/AccountManagement" />; // Sử dụng để redirect tới trang login
    }

    return (
      <div className="container" style={{ width: "70%" }}>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <br />
            <br />
            <br />
            <h3>LOGIN</h3>
            <br />
            <div className="form-group">
              <label for="Email">Email:</label>
              <input
                type="email"
                required="true"
                className="form-control"
                id="Email_Login_id"
                name="Email"
                value={this.state.Email}
                onChange={this.handleChange}
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label for="Password">Password:</label>
              <input
                type="Password"
                required="true"
                className="form-control"
                id="Password_Login_id"
                name="Password"
                value={this.state.Password}
                onChange={this.handleChange}
                placeholder="Enter Password"
              />
            </div>
            <button type="submit" className="btn btn-info" onClick={this.handleSubmit}>
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

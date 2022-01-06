import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import WithAuth from "./../HOC/WithAuth";

class DepartmentManagement extends Component {
  render() {
    // let user_login = JSON.parse(localStorage.getItem("user_login")); // check xem có thông tin ở local chưa , nếu chưa có sẽ bắt đăng nhập
    // if (!user_login) {
    //   alert("Hãy đăng nhập hệ thống để xem nội dung này.");
    //   return <Redirect to="/Login" />; // Sử dụng để redirect tới trang login
    // }
    return (
      <div>
        <h1>DepartmentManagement</h1>
      </div>
    );
  }
}

export default WithAuth(DepartmentManagement);

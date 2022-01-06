import React, { Component } from "react";
import { Redirect } from "react-router-dom";
function WithAuth(AuthenticatedComponent) {
  class HOC extends Component {
    user_login = JSON.parse(localStorage.getItem("user_login"));
    render() {
      if (this.user_login) {
        return <AuthenticatedComponent {...this.props} />;
      } else {
        alert("Hãy đăng nhập hệ thống để xem nội dung này.");
        return <Redirect to="/Login" />;
      }
    }
  }
  return HOC;
}
export default WithAuth;

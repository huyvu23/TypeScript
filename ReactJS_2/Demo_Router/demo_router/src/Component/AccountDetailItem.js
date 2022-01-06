import React, { Component } from "react";

class AccountDetailItem extends Component {
  render() {
    return (
      <div className="row text-center">
        <h3>This is Account Detail Page</h3>
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">{/* Sử dụng để căn giữa trang */}</div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <table className="table table-hover">
            <thead>
              <tr style={{ color: "red", fontWeight: "bold" }}>
                <td>ID</td>
                <td>Email</td>
                <td>Username</td>
                <td>Fullname</td>
                <td>Department</td>
                <td>Position</td>
              </tr>
            </thead>
            <tbody>
              {/* In các row */}
              {this.props.row_Account}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AccountDetailItem;

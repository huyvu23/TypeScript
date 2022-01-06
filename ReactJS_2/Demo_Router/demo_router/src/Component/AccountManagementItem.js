import React, { Component } from "react";

class AccountManagementItem extends Component {
  render() {
    return (
      <div className="row">
        <h3>Thông tin Account</h3>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <table className="table table-hover">
            <thead>
              <tr>
                <td>ID</td>
                <td>Email</td>
              </tr>
            </thead>
            <tbody>{this.props.row_Account}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AccountManagementItem;

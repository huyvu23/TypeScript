import React, { Component } from "react";
import ResultForm_Item from "./ResultForm_Item";

class ResultForm extends Component {
  render() {
    // const { listAccounts } = this.props;
    return (
      <div className="row">
        <div className="Form">
          <h3>Thông tin trên hệ thống</h3>

          <table className="table table-hover">
            <thead>
              <tr>
                <th>
                  ID <i className="fa fa-fw fa-sort" onClick="changeSort('id')"></i>{" "}
                </th>
                <th>Email</th>
                <th>Username</th>
                <th>Fullname</th>
                <th>Department</th>
                <th>Position</th>
                <th>
                  Cretate Date <i className="fa fa-fw fa-sort" onclick="changeSort('createDate')"></i>
                </th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody id="Result_TB">
              {/* Nhận dữ liệu từ APP */}
              <ResultForm_Item listAccounts={this.props.listAccounts} onDeleteForm={this.props.onDeleteForm} onUpdateForm={this.props.onUpdateForm} />
            </tbody>
          </table>

          <nav aria-label="Page navigation example">
            <ul className="pagination" id="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default ResultForm;

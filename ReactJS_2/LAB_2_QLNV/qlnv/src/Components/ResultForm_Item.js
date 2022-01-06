import React, { Component } from "react";

class ResultForm_Item extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.CreateDate = "12/9/2021";
  // }

  onUpdateForm = (id) => {
    this.props.onUpdateForm(id);
  };

  // ========================

  onDeleteForm = (id) => {
    this.props.onDeleteForm(id);
  };

  render() {
    // khai báo 1 biến để chứa dữ liệu từ ResultForm gửi xuống
    let listAccounts = this.props.listAccounts;
    // sử dụng vòng lặp , lặp qua từng phần tử trong listAccounts, mỗi lần lặp lấy ra 1 account và sử dụng account này để hiển thị giao diện
    const rows = listAccounts.map((account, index) => {
      return (
        <>
          <tr>
            <td>{account.ID}</td>
            <td>{account.Email}</td>
            <td>{account.Username}</td>
            <td>{account.Fullname}</td>
            <td>{account.Department}</td>
            <td>{account.Position}</td>
            <td>{account.CreateDate}</td>
            <td>
              <button className="btn btn-warning" onClick={() => this.onUpdateForm(account.ID)}>
                Update
              </button>
            </td>
            <td>
              {/* ======================================== viết đưới dạng arrow funcion */}
              <button className="btn btn-warning" onClick={() => this.onDeleteForm(account.ID)}>
                Delete
              </button>
            </td>
          </tr>
        </>
      );
    });
    return rows;
  }
}

export default ResultForm_Item;

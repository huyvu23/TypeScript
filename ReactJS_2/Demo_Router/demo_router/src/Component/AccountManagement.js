import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import WithAuth from "../HOC/WithAuth";
import WithLoading from "../HOC/WithLoading";
import AccountManagementItem from "./AccountManagementItem";

class AccountManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listAccounts: [],
    };
  }

  componentDidMount() {
    // lấy dữ liệu qua API
    let listAccountsAPI = [
      {
        ID: "1",
        Email: "Email1@gmail.com",
      },
      {
        ID: "2",
        Email: "Email2@gmail.com",
      },
      {
        ID: "3",
        Email: "Email3@gmail.com",
      },
      {
        ID: "4",
        Email: "Email4@gmail.com",
      },
    ];
    // hàm setTimeout để Demo Delay khi lấy dữ liệu về
    setTimeout(() => {
      // Set state cho listAccount
      this.setState({
        listAccounts: listAccountsAPI,
      });
    }, 3000);
  }

  render() {
    // let user_login = JSON.parse(localStorage.getItem("user_login")); // check xem có thông tin ở local chưa , nếu chưa có sẽ bắt đăng nhập
    // if (!user_login) {
    //   alert("Hãy đăng nhập hệ thống để xem nội dung này.");
    //   return <Redirect to="/Login" />; // Sử dụng để redirect tới trang login
    // }
    //Check xem listAccount có dữ liệu chưa nếu chưa sẽ hiện loading...
    // if (this.state.listAccounts.length === 0) {
    //   return (
    //     <div>
    //       <p>Loading...</p>
    //     </div>
    //   );
    // }

    let AccountManagementItemWithLoading = WithLoading(AccountManagementItem); // sử dụng HOC
    // Khi sử dụng HOC truyền theo 1 Props : isLoading  : this.state.listAccounts.length === 0

    // In thông tin chi tiết của Account.
    const row_Account = this.state.listAccounts.map((account, index) => {
      let url = "/AccountDetail/" + account.ID;
      return (
        <>
          <tr>
            <td> {account.ID}</td>
            <NavLink to={url}>
              <td> {account.Email}</td>
            </NavLink>
          </tr>
        </>
      );
    });

    return <AccountManagementItemWithLoading isLoading={this.state.listAccounts.length === 0} row_Account={row_Account} />;
    // <AccountManagementItem row_Account={row_Account} />;
  }
}

export default WithAuth(AccountManagement);

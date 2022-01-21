import React, { Component } from "react";
import WithLoading from "../HOC/WithLoading";
import AccountDetailItem from "./AccountDetailItem";

class AccountDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listAccounts: [],
    };
  }

  componentDidMount() {
    let listAccounts = [
      {
        ID: "1",
        Email: "Email1@gmail.com",
        Username: "Username1",
        Fullname: "Fullname1",
        Department: "Sale",
        Position: "Scrum Master",
      },
      {
        ID: "2",
        Email: "Email2@gmail.com",
        Username: "Username2",
        Fullname: "Fullname2",
        Department: "Sale",
        Position: "Scrum Master",
      },
      {
        ID: "3",
        Email: "Email3@gmail.com",
        Username: "Username3",
        Fullname: "Fullname3",
        Department: "Accounting",
        Position: "Scrum Master",
      },
      {
        ID: "4",
        Email: "Email4@gmail.com",
        Username: "Username4",
        Fullname: "Fullname4",
        Department: "Accounting",
        Position: "Scrum Master",
      },
    ];
    setTimeout(() => {
      this.setState({
        listAccounts: listAccounts,
      });
    }, 3000);
  }

  render() {
    //Check xem listAccount có dữ liệu chưa nếu chưa sẽ hiện loading...
    // if (this.state.listAccounts.length === 0) {
    //   return (
    //     <div>
    //       <p>Loading...</p>
    //     </div>
    //   );
    // }
    let AccountDetailItemWithLoading = WithLoading(AccountDetailItem);

    let match = this.props.match;
    console.log("Gia trị match nhận được :", match);
    // lấy ra id truyền xuống từ Account Management
    let id = this.props.match.params.ID;

    // In thông tin chi tiết của Account.
    const row_Account = this.state.listAccounts.map((account, index) => {
      // check xem accountID nào  bằng id truyền xuống thì in ra
      if (account.ID === id) {
        return (
          <>
            <tr>
              <td>{account.ID}</td>
              <td>{account.Email}</td>
              <td>{account.Username}</td>
              <td>{account.Fullname}</td>
              <td>{account.Department}</td>
              <td>{account.Position}</td>
            </tr>
          </>
        );
      }
    });
    // ================================================================================== row_Account={row_Account}= ...this.props
    return <AccountDetailItemWithLoading isLoading={this.state.listAccounts.length === 0} row_Account={row_Account} />;
    // <AccountDetailItem row_Account={row_Account} />;
  }
}

export default AccountDetail;

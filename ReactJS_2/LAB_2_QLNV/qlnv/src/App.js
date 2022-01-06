import React, { Component } from "react";
import "./App.css";
import InputForm from "./Components/InputForm";
import ResultForm from "./Components/ResultForm";
import SearchForm from "./Components/SearchForm";
import Axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listAccounts: [], // Tạo list này để lưu thông tin account trên hệ thống.
      isShowInputForm: false, // Tạo State đê lưu thông tin ẩn hiện Input Form, True: hiện form
      accountUpdate: null, // Tạo thêm 1 đối tượng State để lưu thông tin của Account cần update thông tin
      search_key: null, // State dùng trong tìm kiếm
    };
  }

  // được gọi trong lần render đầu tiên, đoạn lệnh này sẽ load dữ liệu từ LocalStorage và set lại vào  listAccounts qua State
  componentDidMount() {
    // // check xem localStorage có dữu liệu hay không
    // if (localStorage && localStorage.getItem("listAccounts")) {
    //   // lấy lại listAccounts bằng JSON.parse
    //   let listAccounts = JSON.parse(localStorage.getItem("listAccounts"));
    //   this.setState({
    //     listAccounts: listAccounts,
    //
    // }

    const baseURL = `http://localhost:8080`;
    Axios.get(`${baseURL}/api/v1/accounts/`).then((response) => {
      console.log("Dữ liệu nhận được là : ", response.data);
      let List_Account_API = response.data; // khai báo list để chứa giá trị trả về
      let listAccounts = this.state.listAccounts; // lấy lại listAccount để set dữu liệu
      for (let index = 0; index < List_Account_API.length; index++) {
        let Account = {
          // ======================== chấm theo tên api đẩy ra
          ID: List_Account_API[index].id,
          Email: List_Account_API[index].email,
          Username: List_Account_API[index].username,
          Fullname: List_Account_API[index].fullname,
          Department: List_Account_API[index].department,
          Position: List_Account_API[index].position,
          CreateDate: List_Account_API[index].createDate,
        };
        listAccounts.push(Account);
      }
      this.setState({
        listAccounts: listAccounts,
      });
    });
  }

  showInput = () => {
    this.setState({
      // !this.state.isShowInputForm <==> state ngược lại
      isShowInputForm: !this.state.isShowInputForm,
    });
  };

  onShowForm = () => {
    this.setState({
      isShowInputForm: false,
    });
  };

  save = (account) => {
    let listAccounts = this.state.listAccounts; // lấy lại list account để chuẩn bị add account mới vào
    listAccounts.push(account); // add account truyền về vào list account
    this.setState({
      listAccounts: listAccounts,
    });
    localStorage.setItem("listAccounts", JSON.stringify(listAccounts));
  };

  // ================= NÚT DELETE ====================
  onDeleteForm = (id) => {
    let listAccounts = this.state.listAccounts; // lấy lại listAccount
    let indexAccountDelete = listAccounts.findIndex((account) => account.ID === id); // tìm ả account bằng id truyền về (lấy ra index Account cần xóa)
    // nếu index khác -1 bởi vì index luôn bắt đầu bằng 0
    if (indexAccountDelete !== -1) {
      listAccounts.splice(indexAccountDelete, 1); // indexAccountDelete: index cần xóa ; 1: là số phần tử cần xóa
      this.setState({
        listAccounts: listAccounts,
      });
      localStorage.setItem("listAccounts", JSON.stringify(listAccounts));
    }
  };

  // ================= NÚT UPDATE - ResultForm_Item =====================
  onUpdateForm = (id) => {
    let listAccounts = this.state.listAccounts; // lấy lại listAccounts
    // ============================================(tìm account với accountID bằng id vừa nhận được )
    let indexAccountUpdate = listAccounts.findIndex((account) => account.ID === id);
    if (indexAccountUpdate !== -1) {
      let accountUpdate = listAccounts[indexAccountUpdate]; // lấy ra được account update
      this.setState({
        accountUpdate: accountUpdate,
        isShowInputForm: true,
      });
    }
  };

  // Hàm callback -------- NÚT UPDATE InputForm
  account_Update_Button = (data) => {
    // console.log(data);
    let listAccounts = this.state.listAccounts; // lấy lại listAccounts
    // ============================================(tìm account với accountID bằng id vừa nhận được )
    let indexAccount_Update = listAccounts.findIndex((account) => account.ID === data.ID);
    if (indexAccount_Update !== -1) {
      listAccounts[indexAccount_Update] = data; // set account vừa lấy dc bằng account update gửi về
      this.setState({
        listAccounts: listAccounts,
      });
    }
    localStorage.setItem("listAccounts", JSON.stringify(listAccounts));
  };

  // Hàm cho nút search
  onSearchForm = (search_key) => {
    // console.log("Dữ liệu nhận được: ", search_key);
    this.setState({
      search_key: search_key,
    });
  };

  render() {
    let isShowInputForm = this.state.isShowInputForm;

    // Khai báo biến để render inputForm
    let inputForm_Element;

    if (isShowInputForm) {
      // =========================== onShowForm = {this.onShowForm} truyền dữ liệu xuống nút close ở inputForm
      inputForm_Element = (
        <InputForm onShowForm={this.onShowForm} save={this.save} accountUpdate={this.state.accountUpdate} account_Update_Button={this.account_Update_Button} />
      );
    } else {
      inputForm_Element = "";
    }

    // Xử lý render khi có search_key, sẽ giới hạn lại list trả về cho ResultForm trong listAccounts bằng hàm fillter
    // Khai báo để lấy giá trị của search_key
    let search_key = this.state.search_key; // check dữ liệu search
    let listAccounts = this.state.listAccounts;
    let listAccounts_filter = []; // khai báo list dùng để chưa các giá trị sau khi filter.
    if (search_key) {
      for (let index = 0; index < listAccounts.length; index++) {
        // toLowerCase() : chuyển hết về chữ thường để không phân biệt Hoa hay thường
        // includes : nếu có dữ liệu sẽ in ra
        if (
          listAccounts[index].ID.toLowerCase().includes(search_key.toLowerCase()) ||
          listAccounts[index].Email.toLowerCase().includes(search_key.toLowerCase()) ||
          // listAccounts[index].Username.toLowerCase().includes(search_key.toLowerCase())
          // listAccounts[index].Fullname.toLowerCase().includes(search_key.toLowerCase()) ||
          listAccounts[index].Department.toLowerCase().includes(search_key.toLowerCase()) ||
          listAccounts[index].Position.toLowerCase().includes(search_key.toLowerCase())
          // listAccounts[index].CreateDate.toLowerCase().includes(search_key.toLowerCase())
        ) {
          listAccounts_filter.push(listAccounts[index]); // Lấy các phần tử thỏa mãn đk search_key lưu vào listAccounts_filter trung gian
        }
      }
      listAccounts = listAccounts_filter; // gán lại giá trị sau khi đã filter cho listAccounts.
    }

    return (
      <div className="App">
        <div className="container">
          <div className="form">
            <div className="col-xs-offset-2 col-xs-9 col-sm-9 col-md-9 col-lg-9">
              {/* Nút Create Account */}
              <input type="button" className="btn btn-success" id="Create_btn" value="Create Account" onClick={this.showInput}></input>
              {/*  */}
              {inputForm_Element}
              <br />
              <br />
              <SearchForm onSearchForm={this.onSearchForm} />
              <br />
              <br />
              <ResultForm listAccounts={listAccounts} onDeleteForm={this.onDeleteForm} onUpdateForm={this.onUpdateForm} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

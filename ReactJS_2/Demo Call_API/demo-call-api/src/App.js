import React, { Component } from "react";
import "./App.css";
import InputForm from "./Components/InputForm";
import ResultForm from "./Components/ResultForm";
import SearchForm from "./Components/SearchForm";
import Axios from "axios";
import AccountApi from "./API/AccountApi";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listAccounts: [],
      isShowInputForm: false,
      accountUpdate: null,
      search_key: null,
    };
  }
  // Viết hàm componentDidMount
  componentDidMount() {
    this.getListAccount();
  }

  getListAccount = async () => {
    // // thực hiện call API
    // const baseURL = `http://localhost:8080`;
    // Axios.get(`${baseURL}/api/v1/accounts/`)
    //   .then((response) => {
    //     console.log("Dữ liệu Account là : ", response.data);
    //     let List_Account_API = response.data; // khai báo list để chứa giá trị trả về
    //     let listAccounts = []; // lấy lại listAccount để set dữu liệu
    //     for (let index = 0; index < List_Account_API.length; index++) {
    //       let Account = {
    //         // ======================== chấm theo tên api đẩy ra
    //         ID: List_Account_API[index].id,
    //         Email: List_Account_API[index].email,
    //         Username: List_Account_API[index].username,
    //         Fullname: List_Account_API[index].fullname,
    //         Department: List_Account_API[index].department,
    //         Position: List_Account_API[index].position,
    //         CreateDate: List_Account_API[index].createDate,
    //       };
    //       listAccounts.push(Account);
    //     }
    //     this.setState({
    //       listAccounts: listAccounts,
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // =============================================================================================
    try {
      // lấy ra listAccount
      let response = await AccountApi.getAllAccount();
      // console.log("Account nhận được :", response);
      let List_Account_API = response.data; // khai báo list để chứa giá trị trả về
      let listAccounts = []; // lấy lại listAccount để set dữu liệu
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
    } catch (error) {
      alert("Đã xảy ra lỗi !");
    }
  };

  // Viết function
  showInputForm = () => {
    this.setState({
      isShowInputForm: !this.state.isShowInputForm,
    });
  };

  onshowForm = () => {
    this.setState({
      isShowInputForm: !this.state.isShowInputForm,
    });
  };
  // Xử lý cho nút Submit
  onSaveForm = (data) => {
    // // console.log("Dữ liệu nhận được từ Input Form ở APP.js: ", data);
    // // Bước 1. Set lại State listaccount
    // let listAccounts = this.state.listAccounts;
    // listAccounts.push(data);
    // this.setState({
    //   listAccounts: listAccounts,
    // });
    // // Bước 2: Lưu lại listaccount xuông localStorage
    // localStorage.setItem("listAccounts", JSON.stringify(listAccounts));

    let account = {
      email: data.Email,
      username: data.Username,
      fullname: data.Fullname,
      departmentId: data.Department,
      positionId: data.Position,
    };

    Axios.post(`http://localhost:8080/api/v1/accounts`, account).then((response) => {
      // Hiển thị lại dữ liệu khi thêm mới
      this.getListAccount();
    });
  };
  // Hàm xóa dữ liệu
  onDeleteForm = (id) => {
    // console.log("ID Cần xóa là: ", id);
    // let listAccounts = this.state.listAccounts;
    // let indexAccountDel = listAccounts.findIndex((account) => account.ID === id);
    // console.log("Index của phần tử cần xóa:", indexAccountDel);

    // if (indexAccountDel !== -1) {
    //   listAccounts.splice(indexAccountDel, 1);
    //   this.setState({
    //     listAccounts: listAccounts,
    //   });
    //   localStorage.setItem("listAccounts", JSON.stringify(listAccounts));
    // }

    const baseURL = `http://localhost:8080`;
    Axios.delete(`${baseURL}/api/v1/accounts/${id}`)
      .then((response) => {
        this.getListAccount();
      })
      .catch((error) => console.log(error));
  };

  // Xử lý update dữ liệu
  onDUpdateForm = (id) => {
    console.log("ID của Account cần update: ", id);
    let listAccounts = this.state.listAccounts;
    let indexAccountUpdate = listAccounts.findIndex((account) => account.ID === id);
    if (indexAccountUpdate !== -1) {
      this.setState({
        isShowInputForm: true,
      });

      console.log("Index của Account cần update: ", indexAccountUpdate);
      let accountUpdate = listAccounts[indexAccountUpdate];
      console.log("Thông tin Account cần update: ", accountUpdate);
      // Set lại State cho accountUpdate
      this.setState({
        accountUpdate: accountUpdate,
      });
    }
  };

  // Hàm xử lý update dữ liệu vào list
  update_Account_Button = (account) => {
    // console.log("Dữ liệu account update là: ", account);

    // let listAccounts = this.state.listAccounts;
    // let indexAccount_Update = listAccounts.findIndex((account1) => account1.ID === account.ID);
    // if (indexAccount_Update !== -1) {
    //   listAccounts[indexAccount_Update] = account; // Thực hiện sửa lại Account theo data nhận được
    //   this.setState({
    //     listAccounts: listAccounts,
    //   });
    //   localStorage.setItem("listAccounts", JSON.stringify(listAccounts)); // Lưu lại dữ liệu xuống local Storage
    // }

    // chuyển đổi tên Department ra ID
    let listDep = account.ListDepartment;
    let depName = account.Department;
    let depID;
    listDep.forEach((element) => {
      if (element.name === depName) {
        depID = element.id;
      }
    });

    // chuyển đổi Position ra ID
    let lisPos = account.ListPosition;
    let posName = account.Position;
    let posID;
    lisPos.forEach((element) => {
      if (element.name === posName) {
        posID = element.id;
      }
    });

    const baseURL = `http://localhost:8080`;
    let body = {
      fullname: account.Fullname, // account.Fullname lấy theo state của InputForm
      departmentId: depID, // account.Department giá trị này được truyền theo value của thẻ select, ở đây đã trả ra depID
      positionId: posID, // account.Position giá trị này được truyền theo value của thẻ select, ở đây đã trả ra posID
    };

    // lấy ra id account cần update
    let id = account.ID;

    Axios.put(`${baseURL}/api/v1/accounts/${id}`, body)
      .then((response) => {
        // console.log(response);
        this.getListAccount(); // gọi lại hàm này để cập nhật dữ liệu sau khi thêm mới thành công
      })
      .catch((error) => console.log(error));
  };

  // Xử lý search dữ liệu
  onSearchForm = (data) => {
    console.log("Dữ liệu search từ APP: ", data);
    this.setState({
      search_key: data,
    });
  };

  render() {
    let isShowInputForm = this.state.isShowInputForm;
    let inputForm_Element;
    let listAccounts = this.state.listAccounts;
    //  <InputForm />;
    if (isShowInputForm) {
      inputForm_Element = (
        <InputForm
          onshowForm={this.onshowForm}
          onSaveForm={this.onSaveForm}
          accountUpdate={this.state.accountUpdate}
          update_Account_Button={this.update_Account_Button}
        />
      );
    } else {
      inputForm_Element = "";
    }

    // Xử lý render cho search
    let search_key = this.state.search_key;

    if (search_key) {
      let listAccounts_filter = [];
      for (let index = 0; index < listAccounts.length; index++) {
        // Sử dụng hàm includes để so sánh chuỗi, if chuỗi cha bao gồm chuỗi con sẽ trả về true, https://www.w3schools.com/jsref/jsref_includes.asp
        if (
          listAccounts[index].ID.toLowerCase().includes(search_key.toLowerCase()) ||
          listAccounts[index].Email.toLowerCase().includes(search_key.toLowerCase())
          // listAccounts[index].Username.toLowerCase().includes(search_key.toLowerCase()) ||
          // listAccounts[index].Fullname.toLowerCase().includes(search_key.toLowerCase()) ||
          // listAccounts[index].Department.toLowerCase().includes(search_key.toLowerCase()) ||
          // listAccounts[index].Position.toLowerCase().includes(search_key.toLowerCase()) ||
          // listAccounts[index].Cretate_Date.toLowerCase().includes(search_key.toLowerCase())
        ) {
          listAccounts_filter.push(listAccounts[index]); // Lấy các phần tử thỏa mãn đk search_key lưu vào listAccounts_filter trung gian
        }
      }
      listAccounts = listAccounts_filter;
    }
    //
    return (
      <div className="App">
        <div className="container">
          <input type="button" className="btn btn-success" id="Create_btn" value="Create Account" onClick={this.showInputForm}></input>
          {inputForm_Element}
          {/* ô search dữ liệu */}
          <SearchForm onSearchForm={this.onSearchForm} />
          {/*  */}
          <ResultForm listAccounts={listAccounts} onDeleteForm={this.onDeleteForm} onDUpdateForm={this.onDUpdateForm} />
        </div>
      </div>
    );
  }
}

export default App;

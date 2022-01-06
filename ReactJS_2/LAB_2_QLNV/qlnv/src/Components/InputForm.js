import React, { Component } from "react";

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: "",
      Email: "",
      Username: "",
      Fullname: "",
      Department: "",
      Position: "",
      CreateDate: "",
    };
  }
  //
  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  // viết hàm sử lí nút save
  save = (event) => {
    let account = {
      ID: this.state.ID,
      Email: this.state.Email,
      Username: this.state.Username,
      Fullname: this.state.Fullname,
      Department: this.state.Department,
      Position: this.state.Position,
      CreateDate: this.state.CreateDate,
    };
    this.props.save(account);

    event.preventDefault(); // Hàm này để ngăn reddicrect đến trang khác
  };

  // set thông tin lấy được lên các ô input
  componentDidMount() {
    // console.log("Thông tin Update nhận được là ", this.props.accountUpdate);
    if (this.props.accountUpdate) {
      this.setState({
        ID: this.props.accountUpdate.ID,
        Email: this.props.accountUpdate.Email,
        Username: this.props.accountUpdate.Username,
        Fullname: this.props.accountUpdate.Fullname,
        Department: this.props.accountUpdate.Department,
        Position: this.props.accountUpdate.Position,
        CreateDate: this.props.accountUpdate.CreateDate,
      });
    }
  }

  // viết hàm sử lí nút close
  onShowForm = () => {
    // nhận dữ liệu từ bên trên truyền xuống
    this.props.onShowForm();
  };

  // Viết hàm xử lí cho nút Update
  update = () => {
    this.props.account_Update_Button(this.state);
  };

  // Sẽ Được Gọi khi Props Truyền Từ Cha Xuống Con Thay Đổi
  static getDerivedStateFromProps(props, state) {
    console.log("Log khi ấn lại nút props:", props);
    console.log("Log khi ấn nút state:", state);
    if (props.accountUpdate == null) {
      return;
    }
    if (props.accountUpdate.ID !== state.ID) {
      return {
        ID: props.accountUpdate.ID,
        Email: props.accountUpdate.Email,
        Username: props.accountUpdate.Username,
        Fullname: props.accountUpdate.Fullname,
        Department: props.accountUpdate.Department,
        Position: props.accountUpdate.Position,
        CreateDate: props.accountUpdate.CreateDate,
      };
    }
  }

  render() {
    return (
      <htmlFor id="Main_Form_ID" method="POST">
        <legend>Quản lí nhân viên</legend>

        <div className="form-group">
          <label for="">lD</label>
          <input type="number" className="form-control" id="ID_ID" placeholder="Input ID" name="ID" value={this.state.ID} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label for="">Email: </label>
          <input
            type="email"
            required="true"
            className="form-control"
            id="Email_ID"
            placeholder="Enter Email"
            name="Email"
            value={this.state.Email}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label for="">Username: </label>
          <input
            type="text"
            required="true"
            className="form-control"
            id="Username_ID"
            placeholder="Enter Username"
            name="Username"
            value={this.state.Username}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label for="">Fullname: </label>
          <input
            type="text"
            required="true"
            className="form-control"
            id="Fullname_ID"
            placeholder="Enter Fullname"
            name="Fullname"
            value={this.state.Fullname}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <label for="sel1">Select a Department:</label>
          <select className="form-control" id="Department_ID" name="Department" value={this.state.Department} onChange={this.handleChange}>
            <option>--Select a Department--</option>
            <option>Accounting</option>
            <option>Business Development</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Research and Development</option>
          </select>
        </div>
        <div className="form-group">
          <label for="sel1">Select a Position:</label>
          <select className="form-control" id="Position_ID" name="Position" value={this.state.Position} onChange={this.handleChange}>
            <option>--Select a Position--</option>
            <option>Developer</option>
            <option>Tester</option>
            <option>Scrum Master</option>
            <option>PM</option>
          </select>
        </div>
        <div className="form-group">
          <label for="">CreateDate: </label>
          <input
            type="date"
            required="true"
            class="form-control"
            id="Cretate_Date_ID"
            name="CreateDate"
            value={this.state.CreateDate}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <input type="submit" className="btn btn-success" value="Save" onClick={this.save} />
          <input type="button" className="btn btn-success" id="update_btn" value="Update" onClick={this.update} />
          <input type="button" className="btn btn-success" onClick="resetForm()" id="reset_btn" value="Reset" />
          {/* <!-- <a href="#" class="f90-logout-button" onclick="logout()">Logout</a> --> */}
          <input type="submit" className="btn btn-success" onClick="logout()" value="Logout" />
          {/* Bổ xung thêm nút Close khi render, và sự kiện onClick, hàm xử lý sự kiên onShowForm */}
          <input type="button" class="btn btn-danger" value="Close" onClick={this.onShowForm}></input>
        </div>
      </htmlFor>
    );
  }
}

export default InputForm;

import React, { Component } from "react";
import Axios from "axios";
import DepartmentApi from "../API/DepartmentApi";
import PositionApi from "../API/PositionApi";

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
      Cretate_Date: "",
      ListDepartment: [],
      ListPosition: [],
    };
  }

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    // chuyển đổi tên Department ra ID
    let listDep = this.state.ListDepartment;
    let depName = this.state.Department;
    let depID;
    listDep.forEach((element) => {
      if (element.name === depName) {
        depID = element.id;
      }
    });

    // chuyển đổi Position ra ID

    let lisPos = this.state.ListPosition;
    let posName = this.state.Position;
    let posID;
    lisPos.forEach((element) => {
      if (element.name === posName) {
        posID = element.id;
      }
    });

    let account = {
      ID: this.state.ID,
      Email: this.state.Email,
      Username: this.state.Username,
      Fullname: this.state.Fullname,
      Department: depID,
      Position: posID,
      Cretate_Date: this.state.Cretate_Date,
    };
    this.props.onSaveForm(account);
    event.preventDefault();
  };

  //=========================================================================
  onShowForm = () => {
    this.props.onshowForm();
  };

  // Hiển thị thông tin Account cần update
  componentDidMount() {
    if (this.props.accountUpdate) {
      this.setState({
        ID: this.props.accountUpdate.ID,
        Email: this.props.accountUpdate.Email,
        Username: this.props.accountUpdate.Username,
        Fullname: this.props.accountUpdate.Fullname,
        Department: this.props.accountUpdate.Department,
        Position: this.props.accountUpdate.Position,
        Cretate_Date: this.props.accountUpdate.Cretate_Date,
      });
    }

    // thực hiện getListDepartment
    this.getListDepartment();

    // Thực hiện getListPosition
    this.getListPosition();
  }

  // thực hiện callAPI listDepartment
  getListDepartment = async () => {
    // const baseURL = `http://localhost:8080`;
    // Axios.get(`${baseURL}/api/v1/departments`)
    //   .then((response) => {
    //     console.log("Dữ liệu nhận được là : ", response.data);
    //     this.setState({
    //       ListDepartment: response.data,
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    try {
      let response = await DepartmentApi.getAllDepartments();
      this.setState({
        ListDepartment: response.data,
      });
    } catch (error) {
      alert("Đã có lỗi xảy ra");
    }
  };

  // thực hiện call API cho list Position
  getListPosition = async () => {
    // const baseURL = `http://localhost:8080`;
    // Axios.get(`${baseURL}/api/v1/possitions`)
    //   .then((response) => {
    //     console.log("Dữ liệu Position là : ", response.data);
    //     this.setState({
    //       ListPosition: response.data,
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    try {
      let response = await PositionApi.getAllPosition();
      this.setState({
        ListPosition: response.data,
      });
    } catch (error) {
      alert("Đã có lỗi xảy ra");
    }
  };

  // Hàm xử lý sự kiện khi click vào nút Update
  handleUpdate = () => {
    this.props.update_Account_Button(this.state);
  };
  //
  static getDerivedStateFromProps(new_props, state) {
    console.log("Thông tin new_props", new_props);

    if (new_props.accountUpdate === null) {
      // props.accountUpdate.ID = 0;
      return;
    }

    if (new_props.accountUpdate.ID !== state.ID) {
      return {
        ID: new_props.accountUpdate.ID,
        Email: new_props.accountUpdate.Email,
        Username: new_props.accountUpdate.Username,
        Fullname: new_props.accountUpdate.Fullname,
        Department: new_props.accountUpdate.Department,
        Position: new_props.accountUpdate.Position,
        Cretate_Date: new_props.accountUpdate.Cretate_Date,
      };
    }
  }
  //
  render() {
    //render ra listDeapertment
    let departmentItem = "";
    let ListDepartment = this.state.ListDepartment;
    departmentItem = ListDepartment.map((department, index) => <option>{department.name}</option>);

    //render ra listPosition
    let PositionItem = "";
    let ListPosition = this.state.ListPosition;
    PositionItem = ListPosition.map((position, index) => <option>{position.name}</option>);

    return (
      <div className="form">
        <h3>Quản lý nhân viên</h3>
        <form id="Main_Form_ID">
          <div className="form-group">
            <label htmlFor="">ID: </label>
            <input
              type="number"
              className="form-control"
              id="ID_ID"
              defaultValue=""
              placeholder="Enter Id"
              name="ID"
              value={this.state.ID}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Email: </label>
            <input
              type="email"
              className="form-control"
              id="Email_ID"
              defaultValue=""
              placeholder="Enter Email"
              name="Email"
              value={this.state.Email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Username: </label>
            <input
              type="text"
              className="form-control"
              id="Username_ID"
              defaultValue=""
              placeholder="Enter Username"
              name="Username"
              value={this.state.Username}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Fullname: </label>
            <input
              type="text"
              className="form-control"
              id="Fullname_ID"
              defaultValue=""
              placeholder="Enter Fullname"
              name="Fullname"
              value={this.state.Fullname}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="sel1">Select a Department:</label>
            <select className="form-control" id="Department_ID" name="Department" value={this.state.Department} onChange={this.handleChange}>
              <option>--Select a Department--</option>
              {/* <option>Accounting</option>
              <option>Business Development</option>
              <option>Engineering</option>
              <option>Human Resources</option>
              <option>Research and Development</option> */}
              {departmentItem}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="sel1">Select a Position:</label>
            <select className="form-control" id="Position_ID" name="Position" value={this.state.Position} onChange={this.handleChange}>
              <option>--Select a Position--</option>
              {/* <option>Developer</option>
              <option>Tester</option>
              <option>Scrum Master</option>
              <option>PM</option> */}
              {PositionItem}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="">Cretate Date: </label>
            <input
              type="date"
              className="form-control"
              id="Cretate_Date_ID"
              defaultValue=""
              name="Cretate_Date"
              value={this.state.Cretate_Date}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-success" defaultValue="Save" onClick={this.handleSubmit} />
            <input type="button" className="btn btn-success" id="update_btn" defaultValue="Update" onClick={this.handleUpdate} />
            <input type="button" className="btn btn-success" id="reset_btn" defaultValue="Reset" />
            {/* Nút Close */}
            <input type="button" class="btn btn-danger" value="Close" onClick={this.onShowForm}></input>
          </div>
        </form>
      </div>
    );
  }
}

export default InputForm;

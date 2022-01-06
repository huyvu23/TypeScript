// khi nào sử dụng class component thì dùng this ==> CHÚ Ý
import React, { Component } from "react";
import ComponentsTopsChild from "./ComponentsTopsChild";

// create components  class
class ComponentTop extends Component {
  // khai báo ra state có tên là input_Name : Input_Name sẽ lưu giá trị người dùng nhập vào,State chỉ tồn tại trong class COMPONENT
  constructor(props) {
    super(props);
    this.state = {
      Input_Name: "",
    };
  }
  // hàm xử lí sự kiện click
  // handleClick = () => {
  //   // khai báo biến để lấy lại giá trị
  //   let click_Value = this.state.click_Number;
  //   this.setState({
  //     click_Number: click_Value + 1,
  //   });
  // };

  // Mỗi khi gọi hàm handleChange đầu vào sẽ nhận dc 1 event
  handleChange = (event) => {
    // let name = event.target.name; <==> name ở ô Input
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  // xử lí nút sent data
  click = () => {
    let data = this.state.Input_Name;
    // hàm callback ở trên app (truyền dữ liệu từ con lên cha)
    this.props.getData(data);
  };

  render() {
    return (
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-primary">
            {/*============================truyền dữ liệu trên cha xuống */}
            <div className="panel-heading">{this.props.headingTopPanel}</div>
            <div className="panel-body">
              <div className="row">
                <form method="" id="Main_Form_ID">
                  <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                    <input
                      type="text"
                      name="Input_Name"
                      id="input"
                      className="form-control"
                      // truyền  state vừa tạo vào value
                      value={this.state.Input_Name}
                      onChange={this.handleChange}
                      required="required"
                      pattern=""
                      title=""
                      placeholder="Input something here"
                    />
                  </div>
                  <div className="row">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                      <button type="button" className="btn btn-danger" onClick={this.click}>
                        Sent Data
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/* Gọi component TopChild */}
              <ComponentsTopsChild data={this.props.data} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ComponentTop;

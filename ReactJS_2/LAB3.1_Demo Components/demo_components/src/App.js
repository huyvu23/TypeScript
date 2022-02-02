import React, { Component } from "react";
import ComponentTop from "./Components/ComponentTop";
import ComponentsBottom from "./Components/ComponentsBottom";
import dataConText from "./Context/DataContext";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFromTop: "",
    };
  }

  // khai báo hàm callback
  getDataFromComponentTop = (data) => {
    this.setState({ dataFromTop: data });
  };

  render() {
    let data2 = this.state.dataFromTop; // Khai báo biến data lấy dữ liệu state của component
    return (
      <div className="App">
        {/*  state : chỉ trong cùng component */}
        {/* cứ khi giá trị state thay đổi chương trình reRender lại */}
        {/* Đây là props */}
        {/* =============================== truyền hàm callBack thông qua hàm getData */}
        {/* <ComponentTop headingTopPanel="Top" getData={this.getDataFromComponentTop} data="Dữ liệu từ App" /> */}
        <dataConText.Provider value={data2}>
          {/* cho dữ liệu vào 1 cái kho  */}
          <ComponentTop headingTopPanel="Top" getData={this.getDataFromComponentTop} data="Dữ liệu từ App" />
        </dataConText.Provider>
        <br />
        <br />
        <br />
        <ComponentsBottom messgage="Hello Huy" data={this.state.dataFromTop} />
      </div>
    );
  }
}

export default App;

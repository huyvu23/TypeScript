import React, { Component } from "react";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_key: "",
    };
  }

  //
  // Xử lý khi search_key thay đổi khi nhập liệu, lấy lại State lưu lại
  onChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value,
    });
  };
  //
  handleSearch = () => {
    console.log("Bạn vừa click nút search");
    this.props.onSearchForm(this.state.search_key);
  };

  render() {
    return (
      <div className="row">
        <div className="input-group">
          <input
            type="search"
            className="form-control rounded"
            id="input-search-department"
            placeholder="Search by Email, FullName, Department"
            aria-label="Search"
            aria-describedby="search-addon"
            name="search_key"
            value={this.state.search_key}
            onChange={this.onChange}
          ></input>
          <button type="button" className="btn btn-outline-primary" onClick={this.handleSearch}>
            search
          </button>
        </div>
      </div>
    );
  }
}

export default SearchForm;

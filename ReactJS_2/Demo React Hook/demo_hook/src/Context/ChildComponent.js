import React from "react";
import DataContext from "./../Context/DataContext";
import { useContext } from "react";

function ChildComponent(props) {
  //Context Hook : lấy lại dữ liệu trong dataContext
  let data = useContext(DataContext);
  return (
    <div>
      <h1>Dữ liệu nhận được từ GrandParentComponent : {data}</h1>
    </div>
  );
}

export default ChildComponent;

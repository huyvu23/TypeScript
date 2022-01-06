import React from "react";
import ParentComponent from "./ParentComponent";
import DataContext from "./../Context/DataContext"; // dùng data context thì import vào

function GrandParentComponent(props) {
  const data = ["Huy1", "Huy2", "Huy3"]; // Truyền nội dung này xuống ChildComponent sử dụng
  return (
    <div>
      <DataContext.Provider value={data}>
        <ParentComponent />
      </DataContext.Provider>
    </div>
  );
}

export default GrandParentComponent;

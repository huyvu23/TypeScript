import React from "react";
import { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent(props) {
  const [Data1, setData1] = useState(0);
  const [Data2, setData2] = useState(0);

  console.log("Thực hiện render ParentComponent .... ");
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <button type="button" className="btn btn-success" onClick={() => setData1(Data1 + 1)}>
            Change State Data1
          </button>
          <br />
          Data1: {Data1}
          <br />
          {/* Tạo nút Button để thay đổi Data2 */}
          <button type="button" className="btn btn-success" onClick={() => setData2(Data2 + 1)}>
            Change State Data2
          </button>
          <br />
          Data2: {Data2}
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <ChildComponent data2={Data2} />
        </div>
      </div>
    </div>
  );
}

export default ParentComponent;

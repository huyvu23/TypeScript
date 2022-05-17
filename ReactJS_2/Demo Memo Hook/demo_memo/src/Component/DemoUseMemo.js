import React from "react";
import { useState, useMemo } from "react";

function DemoUseMemo(props) {
  // Khai báo các useState để lưu thông tin của các thẻ input form
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);

  // Viết hàm tính tổng Sum
  const sum = (a, b) => {
    let a_num = Number(a); // chuyển dữ liệu sang kiểu number
    let b_num = Number(b);
    console.log("CALCULATING SUM ........................");
    return a_num + b_num;
  };
  // Viết hàm tính Minus
  const minus = (c, d) => {
    let c_num = Number(c);
    let d_num = Number(d);
    console.log("CALCULATING MINUS ........................");
    return c_num - d_num;
  };
  // Khai báo useMemo
  // ===========================function ,list dependency
  let sum_Memo = useMemo(() => sum(a, b), [a, b]);
  let minus_Memo = useMemo(() => minus(c, d), [c, d]);

  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        {/* Sum */}
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="panel panel-success">
            <div className="panel-heading">
              <h3 className="panel-title">Sum</h3>
            </div>
            <div className="panel-body">
              <input type="number" name="" className="form-control" value={a} onChange={(event) => setA(event.target.value)} />
              <br />
              <br />
              <input type="number" name="" className="form-control" value={b} onChange={(event) => setB(event.target.value)} />
              <br />
              <br />
              <b>Sum: {sum_Memo}</b>
            </div>
          </div>
        </div>
        {/* Minus */}
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="panel panel-success">
            <div className="panel-heading">
              <h3 className="panel-title">Minus</h3>
            </div>
            <div className="panel-body">
              <input type="number" name="" className="form-control" value={c} onChange={(event) => setC(event.target.value)} />
              <br />
              <br />
              <input type="number" name="" className="form-control" value={d} onChange={(event) => setD(event.target.value)} />
              <br />
              <br />
              <b>Minus: {minus_Memo}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemoUseMemo;

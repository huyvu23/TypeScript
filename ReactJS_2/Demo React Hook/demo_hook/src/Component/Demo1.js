import React from "react";
import { useState, useEffect } from "react";
// rsf
function Demo1(props) {
  // useState
  // ===[state,setState]
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // Khai báo handleClick
  let handleClick = () => {
    setCount1(count1 + 1);
  };

  let handleClick2 = () => {
    setCount2(count2 + 1);
  };

  //useEffect : thay thế cho 3 pha
  useEffect(() => {
    console.log("Hàm useEffect được thực thi"); // componentDidMount,componentDidUpdate
    return () => {
      // return () thay thế cho hàm componentWillUnmount
      console.log("Đoạn code thực thi khi unmount");
    };
  }, []);

  return (
    <div className="container">
      {/* Button1 */}
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <button type="button" className="btn btn-danger" onClick={handleClick}>
            Click
          </button>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">Bạn đã click {count1} lần</div>
      </div>
      {/* Button2 */}
      <br />
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <button type="button" className="btn btn-danger" onClick={handleClick2}>
            Click
          </button>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">Bạn đã click {count2} lần</div>
      </div>
    </div>
  );
}

export default Demo1;

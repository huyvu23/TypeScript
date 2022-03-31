import React from "react";
import { useReducer } from "react";
function DemoUseReduce(props) {
  // Khai báo Reducer ==> khai báo 1 bộ xử lý
  // hai tham số đầu vào đặt tên như nào cũng được
  const reducer = (oldState, action) => {
    switch (action.type) {
      case "Increase":
        return oldState + action.value;
      case "Decrease":
        return oldState - action.value;
      case "x_2":
        return oldState * oldState;
      case "Reset":
        return 0;
      default:
        return oldState;
    }
  };
  // khai báo state để lưu kết quả
  const [Data, dispatch] = useReducer(reducer, 0); // cấu trức khai báo useReducer
  // Khai báo action
  let Increase_1 = {
    type: "Increase",
    value: 1,
  };

  let Decrease_1 = {
    type: "Decrease",
    value: 1,
  };

  let Increase_2 = {
    type: "Increase",
    value: 2,
  };

  let Decrease_2 = {
    type: "Decrease",
    value: 2,
  };

  let x_2 = {
    type: "x_2",
    value: Data,
  };

  let reset = {
    type: "Reset",
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-success">
            <div className="panel-heading">
              {/* Để các nút bấm chức năng */}

              <button type="button" className="btn btn-default" onClick={() => dispatch(Increase_1)}>
                +1
              </button>
              <button type="button" className-="btn btn-default" onClick={() => dispatch(Decrease_1)}>
                -1
              </button>
              <button type="button" className="btn btn-default" onClick={() => dispatch(Increase_2)}>
                +2
              </button>
              <button type="button" className="btn btn-default" onClick={() => dispatch(Decrease_2)}>
                -2
              </button>
              <button type="button" className="btn btn-default" onClick={() => dispatch(x_2)}>
                x^2
              </button>
              <button type="button" class="btn btn-default" onClick={() => dispatch(reset)}>
                Reset
              </button>
            </div>
            <div className="panel-body">
              {/* Kết quả */}
              <h3>Result:{Data}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemoUseReduce;

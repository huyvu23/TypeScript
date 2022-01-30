import React from "react";
// create Component function
function ComponentsBottom(props) {
  return (
    <div>
      <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div class="panel panel-warning">
            <div class="panel-heading">
              <h3 class="panel-title">Component_Bottom</h3>
            </div>
            <div class="panel-body">
              <textarea name="" id="input" class="form-control" rows="3" required="required">
                {/* Hello Vti */}
                {/* Lấy dữ liệu từ cha xuống */}
                {props.messgage}
              </textarea>
              {/* trong funtion không có this,class mới có this */}
              <h1>thông tin : {props.data}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComponentsBottom;

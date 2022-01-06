import React from "react";

function ChildComponent(props) {
  // React.memo : không phải là 1 HOOK,chỉ áp dụng cho props
  console.log("Thực hiện render ChildComponent .... ");
  return (
    <div>
      <h1>This is Child</h1>
    </div>
  );
}

export default React.memo(ChildComponent);

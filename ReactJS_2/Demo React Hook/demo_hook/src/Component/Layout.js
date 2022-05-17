import React from "react";
import { useState, useEffect, useLayoutEffect } from "react";
// useEffect
// 1.Cập nhật lại state
// 2.Cập nhật lại DOM
// 3.Render lại UI
// 4.Gọi cleanup nếu deps thay đổi
// 5.gọi useEffect callback

// useLayoutEffect
// 1.Cập nhật lại state
// 2.Cập nhật lại DOM
// 3.Gọi cleanup nếu deps thay đổi(sync)
// 4.gọi useEffect callback(sync)
// 5.Render lại UI

function Layout() {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    if (count > 3) {
      setCount(0);
    }
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default Layout;

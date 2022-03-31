import React from "react";
import { useState, useEffect } from "react";

function TimerEffect() {
  const [countDown, setCountDown] = useState(180);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountDown((prev) => prev - 1);
      console.log("alo....");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>{countDown}</div>;
}

export default TimerEffect;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function StateAndEffectExample() {

  const location = useLocation();
  console.log(location);

  const [count , setCount] = useState(0);
  useEffect(() => {
    document.title = `${count} clicked!`;
  }, [count]);

  return <div>
    <h1>useState and useEffect example.</h1>
    <button onClick={() => setCount(count + 1)}>click me!</button>
  </div>
}
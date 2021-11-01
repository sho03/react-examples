import React from "react";
import ComponentA from "./ComponentA";

export const SampleContext = React.createContext("hello, world");

export default function Main() {


  return <div>
    <SampleContext.Provider value={"hello"}>
      <ComponentA/>
    </SampleContext.Provider>
  </div>
}
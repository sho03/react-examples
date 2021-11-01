import React, { useContext } from "react";
import { SampleContext } from "./Main";

export default function ComponentB() {

  const context = useContext(SampleContext);

  return <div>
    this is ComponentB!!
    { context }
  </div>
}
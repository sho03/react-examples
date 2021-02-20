import React from "react";
import { Link } from "react-router-dom";
import { AccordionSample } from "./accordion/AccordionSample";

export function Home() {
  return <div>
    <h1>Welcome React Examples</h1>
    <Link to={"/Accordion"}>
      AccordionSample
    </Link>
  </div>
}
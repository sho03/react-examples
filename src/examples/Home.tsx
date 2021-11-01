import React from "react";
import { Link } from "react-router-dom";
import { AccordionSample } from "./accordion/AccordionSample";

export function Home() {
  return <div>
    <h1>Welcome React Examples</h1>
    <ul>
      <li>
        <Link to={"/Accordion"}>
          AccordionSample
        </Link>
      </li>
      <li>
        <Link to={"/UseStateAndUseEffectExample"}>
          useState and useEffect example
        </Link>
      </li>
      <li>
        <Link to={"/UseContextExample"}>
          useContext Example
        </Link>
      </li>
    </ul>
  </div>
}
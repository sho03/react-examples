import React from "react";
import styles from "./AccordionSample.module.css";
import Collapsible from "react-collapsible";

export function AccordionSample() {

  return <div className={styles.container}>
    <h1>Welcome, Accordion Sample!!</h1>
    <Collapsible trigger={"click me!!!"}>
      hello, collapsible!
    </Collapsible>
  </div>
}
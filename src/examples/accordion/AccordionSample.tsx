import React from "react";
import styles from "./AccordionSample.module.css";
import Collapsible from "react-collapsible";

export function AccordionSample() {

  return <div className={styles.container}>
    <FAQ question={"Reactを学ぶにはどうすればいいですか？"} answer={"公式サイトを見ましょう"}/>
    <FAQ question={"JavaScriptを学ぶにはどうすればいいですか？"} answer={"MDNのサイトを見ましょう"}/>
  </div>
}

function FAQ(props: FAQProps) {
  return <Collapsible 
      trigger={<Question text={props.question}/>} 
      className={styles.faq}
      openedClassName={styles.faqOpened}
      transitionTime={200}>
    <Answer text={props.answer}/>
  </Collapsible>
}

type FAQProps = {
  question: string,
  answer: string,
}

function Question(props: QuestionProps) {
  const style = {cursor: 'pointer'};
  return <div className={styles.contentContainer} style={style}>
    <div className={styles.prefix}>Q</div>
    <div className={styles.mainArea}>{props.text}</div>
  </div>
}

type QuestionProps = {
  text: string
}

function Answer(props: AnswerProps) {
  return <div className={styles.contentContainer}>
    <div className={styles.prefix}>A</div>
    <div className={styles.mainArea}>{props.text}</div>
  </div>
}

type AnswerProps = {
  text: string
}

function easiestAccordion(){
  return <Collapsible trigger={"click me!!"}>
    This is easiest Accordion!!
  </Collapsible>
}
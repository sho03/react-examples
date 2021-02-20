import React from "react"
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export function Header() {

  return <header className={styles.header}>
    <Link to={"/"}>HOME</Link>
  </header>
}
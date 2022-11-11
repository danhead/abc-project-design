import React from "react";
import styles from "./Interrupt.module.css";

export default function Interrupt() {
  return (
    <div className={styles.block}>
      <span className={styles.spinner}>
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </span>
    </div>
  );
}

import React from "react";
import styles from "./Label.module.css";

export default function Label({ id, children }) {
  return (
    <label className={styles.block} htmlFor={id}>
      {children}
    </label>
  );
}

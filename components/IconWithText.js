import React from "react";
import styles from "./IconWithText.module.css";

export default function IconWithText({ icon, children }) {
  return (
    <div className={styles.block}>
      <div className={styles.icon}>{icon}</div>
      <div>{children}</div>
    </div>
  );
}

import React from "react";
import classnames from "classnames";
import styles from "./Heading.module.css";

export default function Heading({ el: El = "h1", size, children }) {
  return (
    <El
      className={classnames(styles.block, {
        [styles.md]: size === "md",
        [styles.lg]: size === "lg",
        [styles.xl]: size === "xl",
      })}
    >
      {children}
    </El>
  );
}

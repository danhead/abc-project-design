import React from "react";
import classnames from "classnames";
import styles from "./Text.module.css";

export default function Text({
  children,
  alignment,
  size,
  weight,
  color,
  noMargin,
}) {
  return (
    <p
      className={classnames(styles.block, {
        [styles.center]: alignment === "center",
        [styles.right]: alignment === "right",
        [styles.sm]: size === "sm",
        [styles.md]: size === "md",
        [styles.lg]: size === "lg",
        [styles.xl]: size === "xl",
        [styles.bold]: weight === "bold",
        [styles.nomargin]: noMargin,
        [styles.primary]: color === "primary",
        [styles.dark]: color === "dark",
      })}
    >
      {children}
    </p>
  );
}

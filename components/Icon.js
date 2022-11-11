import React from "react";
import classnames from "classnames";
import styles from "./Icon.module.css";

export default function Icon({ children, size, rotate, color }) {
  return (
    <span
      className={classnames(styles.block, {
        [styles.sm]: size === "sm",
        [styles.lg]: size === "lg",
        [styles.xl]: size === "xl",
        [styles.primary]: color === "primary",
        [styles.dark]: color === "dark",
        [styles.success]: color === "success",
        [styles.rotate90]: rotate === "90",
        [styles.rotate180]: rotate === "180",
        [styles.rotate270]: rotate === "270",
      })}
    >
      {children}
    </span>
  );
}

import React from "react";
import classnames from "classnames";
import { Heading } from ".";
import styles from "./Section.module.css";

export default function Section({ variant, children, title }) {
  return (
    <div
      className={classnames(styles.block, {
        [styles.secondary]: variant === "secondary",
      })}
    >
      <div className={styles.content}>
        {title && (
          <div className={styles.head}>
            <Heading el="h2">{title}</Heading>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

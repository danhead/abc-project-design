import React from "react";
import classnames from "classnames";
import styles from "./Grid.module.css";

export default function Grid({ d, sm, md, mdFillFit, children }) {
  return (
    <div
      className={classnames(styles.block, {
        [styles.d2]: d === 2,
        [styles.sm2]: sm === 2,
        [styles.sm3]: sm === 3,
        [styles.md2]: md === 2,
        [styles.md3]: md === 3,
        [styles.md4]: md === 4,
        [styles.mdfillfit]: mdFillFit,
      })}
    >
      {children}
    </div>
  );
}

import React from "react";
import styles from "./Tile.module.css";

export default function Tile({ children }) {
  return <div className={styles.block}>{children}</div>;
}

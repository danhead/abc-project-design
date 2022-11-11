import React from "react";
import styles from "./Select.module.css";

export default function Select({ id, name, value, options = [] }) {
  return (
    <select className={styles.block} id={id} name={name} value={value}>
      {options.map((opt) => (
        <option value={opt.value} key={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

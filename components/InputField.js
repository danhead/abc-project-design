import React from "react";
import styles from "./InputField.module.css";

export default function InputField({ id, name, value, onChange, textArea }) {
  const El = textArea ? "textarea" : "input";
  return (
    <El
      className={styles.block}
      type="text"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

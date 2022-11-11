import React from "react";
import Link from "next/link";
import styles from "./Button.module.css";

export default function Button({ children, type, href }) {
  const isInternal = /^\/(?!\/)/.test(href);
  if (isInternal) {
    return (
      <Link href={href} passHref>
        <a className={styles.block}>{children}</a>
      </Link>
    );
  }
  if (type === "submit") {
    return (
      <button type="submit" className={styles.block}>
        {children}
      </button>
    );
  }
  return (
    <a className={styles.block} href={href}>
      {children}
    </a>
  );
}

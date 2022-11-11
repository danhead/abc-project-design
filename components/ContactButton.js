import React from "react";
import Link from "next/link";
import classnames from "classnames";
import styles from "./ContactButton.module.css";

export default function ContactButton({ children, href, size }) {
  return (
    <Link href={href} passHref>
      <a
        className={classnames(styles.block, {
          [styles.sm]: size === "sm",
        })}
      >
        {children}
      </a>
    </Link>
  );
}

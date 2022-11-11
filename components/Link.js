import React from "react";
import NextLink from "next/link";
import styles from "./Link.module.css";

export default function Link({ href, children, ...rest }) {
  if (/^\/(?!\/)/.test(href)) {
    return (
      <NextLink href={href} passHref>
        <a className={styles.block} {...rest}>
          {children}
        </a>
      </NextLink>
    );
  }
  return (
    <a className={styles.block} href={href} {...rest}>
      {children}
    </a>
  );
}

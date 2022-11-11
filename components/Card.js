import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Card.module.css";

export default function Card({ image, heading, children, href }) {
  return (
    <Link href={href} passHref>
      <a className={styles.block}>
        {image && (
          <span className={styles.media} aria-hidden="true">
            <Image src={image} layout="fill" objectFit="fill" />
          </span>
        )}
        <span className={styles.content}>
          {heading && <span className={styles.head}>{heading}</span>}
          <span className={styles.body}>{children}</span>
        </span>
      </a>
    </Link>
  );
}

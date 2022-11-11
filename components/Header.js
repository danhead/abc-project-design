import React from "react";
import Image from "next/image";
import classnames from "classnames";
import { Heading } from ".";
import styles from "./Header.module.css";

export default function Header({
  image,
  title,
  light,
  map,
  position,
  children,
}) {
  return (
    <div className={styles.block}>
      {image && <Image src={image} layout="fill" objectFit="cover" />}
      {map && <div className={styles.map}>{map}</div>}
      <div
        className={classnames(styles.content, {
          [styles.br]: position === "br",
          [styles.light]: light,
        })}
      >
        {title && <Heading size="xxl">{title}</Heading>}
        {!title && children}
      </div>
    </div>
  );
}

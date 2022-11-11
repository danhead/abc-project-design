import React from "react";
import { Heading, Icon } from ".";
import { CheckatradeLogoSvg, QuoteLeftSvg, QuoteRightSvg } from "../icons";
import styles from "./Review.module.css";

export default function Review({ type, title, author, date, children }) {
  return (
    <div className={styles.block}>
      <div className={styles.head}>
        <Icon size="xl">
          <CheckatradeLogoSvg />
        </Icon>
        <Heading el="h3" size="lg">
          {title}
        </Heading>
      </div>
      <div className={styles.body}>
        <div className={styles.prefix}>
          <Icon size="lg">
            <QuoteLeftSvg />
          </Icon>
        </div>
        <div className={styles.content}>{children}</div>
        <div className={styles.suffix}>
          <Icon size="lg">
            <QuoteRightSvg />
          </Icon>
        </div>
      </div>
    </div>
  );
}

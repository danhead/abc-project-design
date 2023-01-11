import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { Heading, Text } from ".";
import styles from "./HeaderLogo.module.css";
import { LogoArrowsSvg } from "../icons";

export default function HeaderLogo({ transition }) {
  const [visible, setVisible] = useState(!transition);
  useEffect(() => transition && setVisible(true), [transition]);
  return (
    <div className={classnames(styles.block, { [styles.isvisible]: visible })}>
      <div className={styles.top}>
        <LogoArrowsSvg />
      </div>
      <div className={styles.middle}>
        <Heading>ABC Project Ltd</Heading>
        <Text size="lg" noMargin>
          Easy as ABC
        </Text>
      </div>
      <div className={styles.bottom}>
        <LogoArrowsSvg />
      </div>
    </div>
  );
}

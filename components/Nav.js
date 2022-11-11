import React, { useState } from "react";
import classnames from "classnames";
import Link from "next/link";
import { Icon, IconWithText } from ".";
import styles from "./Nav.module.css";
import { FacebookSvg, LogoArrowsSvg } from "../icons";

export default function Nav() {
  const [expanded, setExpanded] = useState();
  return (
    <div
      className={classnames(styles.block, { [styles.isexpanded]: expanded })}
    >
      <div className={styles.container}>
        <div className={styles.home}>
          <Link href="/" passHref>
            <a className={styles.homelink} aria-label="Home">
              <span className={styles.homeicontop}>
                <LogoArrowsSvg />
              </span>
              <span className={styles.homeiconbottom}>
                <LogoArrowsSvg />
              </span>
            </a>
          </Link>
        </div>
        <div className={styles.menu}>
          <button
            className={styles.menubutton}
            onClick={() => setExpanded(!expanded)}
            aria-label={expanded ? "Close menu" : "Open menu"}
          >
            <span className={styles.topbar} />
            <span className={styles.middlebar} />
            <span className={styles.bottombar} />
          </button>
        </div>
        <div className={styles.links}>
          <Link
            href="https://www.facebook.com/people/ABC-Project-Design/100088268944294/"
            passHref
          >
            <a className={styles.link} aria-label="Visit our Facebook page">
              <Icon size="lg">
                <FacebookSvg />
              </Icon>
            </a>
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={classnames(styles.listitem, styles.transform)}>
              <Link href="/" passHref>
                <a className={styles.link}>Home</a>
              </Link>
            </li>
            <li className={classnames(styles.listitem, styles.transform)}>
              <Link href="/services" passHref>
                <a className={styles.link}>Services</a>
              </Link>
              <ul className={styles.sublist}>
                <li className={styles.listitem}>
                  <Link href="/services/bathrooms" passHref>
                    <a className={styles.link}>Bathrooms</a>
                  </Link>
                </li>
                <li className={styles.listitem}>
                  <Link href="/services/tiling" passHref>
                    <a className={styles.link}>Tiling</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className={classnames(styles.listitem, styles.transform)}>
              <Link href="/area-covered" passHref>
                <a className={styles.link}>Area covered</a>
              </Link>
            </li>
            <li className={classnames(styles.listitem, styles.transform)}>
              <Link href="/about" passHref>
                <a className={styles.link}>About</a>
              </Link>
            </li>
            <li className={classnames(styles.listitem, styles.transform)}>
              <Link href="/contact" passHref>
                <a className={styles.link}>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

import React from "react";
import { ContactButton, Grid, Icon, Text } from ".";
import { FacebookSvg, EnvelopeSvg, MobileSvg, PhoneSvg } from "../icons";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <Grid mdFillFit>
          <div className={styles.buttons}>
            <ContactButton href="tel:+442071013958" size="sm">
              <Icon size="lg">
                <PhoneSvg />
              </Icon>
              02071013958
            </ContactButton>
            <ContactButton href="tel:+447378839358" size="sm">
              <Icon size="lg">
                <MobileSvg />
              </Icon>
              07378839358
            </ContactButton>
          </div>
          <div className={styles.buttons}>
            <ContactButton
              href="mailto:quotations@abcprojectdesign.com"
              size="sm"
            >
              <Icon size="lg">
                <EnvelopeSvg />
              </Icon>
              quotations@abcprojectdesign.com
            </ContactButton>
            <ContactButton
              href="https://www.facebook.com/people/ABC-Project-Design/100088268944294/"
              size="sm"
            >
              <Icon size="lg">
                <FacebookSvg />
              </Icon>
              Facebook
            </ContactButton>
          </div>
        </Grid>
        <Text size="xs">
          &copy;
          {year} ABC Project Ltd
        </Text>
      </div>
    </footer>
  );
}

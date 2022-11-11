import React from "react";
import { Icon, IconWithText, Text } from ".";
import {
  CheckSvg,
  ClockSvg,
  CalendarSvg,
  PoundSvg,
  TableListSvg,
} from "../icons";
import styles from "./CaseStudy.module.css";

export default function CaseStudy({ data }) {
  const { features, price, duration, date } = data;
  const formattedDate = new Date(date).toLocaleString("en-GB", {
    month: "long",
    year: "numeric",
  });
  return (
    <div className={styles.block}>
      <div className={styles.content}>
        <div className={styles.features}>
          <IconWithText
            icon={
              <Icon>
                <TableListSvg />
              </Icon>
            }
          >
            <Text weight="bold" size="lg" noMargin>
              Features:
            </Text>
          </IconWithText>
          <ul className={styles.featurelist}>
            {features.map((feature) => (
              <li key={feature}>
                <Icon size="lg" color="success">
                  <CheckSvg />
                </Icon>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.rest}>
          <IconWithText
            icon={
              <Icon>
                <PoundSvg />
              </Icon>
            }
          >
            <Text weight="bold" size="lg" noMargin>
              Total Cost:
            </Text>
          </IconWithText>
          <Text noMargin>{price}</Text>
        </div>
        <div className={styles.rest}>
          <IconWithText
            icon={
              <Icon>
                <ClockSvg />
              </Icon>
            }
          >
            <Text weight="bold" size="lg" noMargin>
              Time taken:
            </Text>
          </IconWithText>
          <Text noMargin>{duration}</Text>
        </div>
        <div className={styles.rest}>
          <IconWithText
            icon={
              <Icon>
                <CalendarSvg />
              </Icon>
            }
          >
            <Text weight="bold" size="lg" noMargin>
              Date:
            </Text>
          </IconWithText>
          <Text noMargin>{formattedDate}</Text>
        </div>
      </div>
    </div>
  );
}

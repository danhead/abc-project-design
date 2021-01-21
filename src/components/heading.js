import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Styles = styled.h1`
  margin: ${props => (props.noMargin ? 0 : `0 0 var(--spacing-y-sm)`)};
  font-size: ${props => `var(--font-size-${props.size})`};
  ${props =>
    props.shadow &&
    css`
      text-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
    `};
`;

const sizes = {
  h1: "xxl",
  h2: "xl",
  h3: "lg",
  h4: "lg",
  h5: "lg",
  h6: "lg"
};

export default function Heading({ el = "h1", withShadow, noMargin, children }) {
  const Container = Styles.withComponent(el);
  return (
    <Container size={sizes[el]} shadow={withShadow} noMargin={noMargin}>
      {children}
    </Container>
  );
}

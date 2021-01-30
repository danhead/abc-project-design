import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Styles = styled.h1`
  margin: ${props => (props.noMargin ? 0 : `0 0 var(--spacing-y-sm)`)};
  font-size: ${props => `var(--font-size-${props.size})`};
  text-shadow: 0 0 ${props => props.shadowRadius || `2px`}
    ${props => props.shadowColor || `rgba(0, 0, 0, 0.25)`};
  ${props =>
    props.color &&
    css`
      color: var(--color-${props.color});
    `}
  ${props =>
    props.noWrap &&
    css`
      white-space: nowrap;
    `}
`;

const sizes = {
  h1: "xxl",
  h2: "xl",
  h3: "lg",
  h4: "lg",
  h5: "lg",
  h6: "lg"
};

export default function Heading({ el = "h1", children, ...other }) {
  const Container = Styles.withComponent(el);
  return (
    <Container size={sizes[el]} {...other}>
      {children}
    </Container>
  );
}

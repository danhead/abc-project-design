import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Styles = styled.h1`
  margin: ${props => (props.noMargin ? 0 : `0 0 var(--spacing-y-sm)`)};
  font-size: ${props => `var(--font-size-${props.size})`};
  text-shadow: 0 0 ${props => props.shadowSize} ${props => props.shadowColor};
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

const shadowSizes = {
  sm: "2px",
  md: "5px",
  lg: "10px",
  xl: "15px"
};

const shadowColors = {
  white: "rgba(255, 255, 255, 0.25)",
  black: "rgba(0, 0, 0, 0.25)"
};

export default function Heading({
  el = "h1",
  shadow = "sm-black",
  children,
  ...other
}) {
  const Container = Styles.withComponent(el);
  const [size, color] = shadow.split("-");
  return (
    <Container
      size={sizes[el]}
      shadowSize={shadowSizes[size]}
      shadowColor={shadowColors[color]}
      {...other}
    >
      {children}
    </Container>
  );
}

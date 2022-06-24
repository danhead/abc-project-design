import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Container = styled.span`
  display: inline-flex;
  width: ${(props) => `var(--icon-size-${props.size})`};
  height: ${(props) => `var(--icon-size-${props.size})`};
  ${(props) =>
    props.color &&
    css`
      color: var(--color-${props.color});
    `}

  svg {
    width: 100%;
    height: 100%;
  }
`;

export default function Icon({ children, size = "md", color }) {
  return (
    <Container size={size} color={color}>
      {children}
    </Container>
  );
}

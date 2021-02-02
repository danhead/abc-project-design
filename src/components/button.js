import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Container = styled.button`
  background-color: transparent;
  margin: 0;
  padding: 4px 8px;
  border: 1px solid var(--color-dark);
  font-size: var(--font-size-md);
  ${props =>
    props.float &&
    css`
      float: ${props.float};
    `}

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px var(--color-dark);
  }

  &:focus:not(:focus-visible) {
    box-shadow: none;
  }
`;

export default function Button({ children, ...other }) {
  return <Container {...other}>{children}</Container>;
}

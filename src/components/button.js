import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Link as GatsbyLink } from "gatsby";

const Container = styled.button`
  background-color: var(--color-white);
  color: var(--color-dark);
  margin: 0;
  padding: 4px 8px;
  border: 1px solid var(--color-dark);
  font-size: var(--font-size-md);
  text-decoration: none;
  cursor: pointer;

  ${props =>
    props.float &&
    css`
      float: ${props.float};
    `}

  &:visited {
    color: var(--color-dark);
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px var(--color-dark);
  }

  &:focus:not(:focus-visible) {
    box-shadow: none;
  }
`;

export default function Button({ children, to, ...other }) {
  if (to) {
    const isInternal = /^\/(?!\/)/.test(to);
    const as = isInternal ? GatsbyLink : "a";
    const url = isInternal ? { to } : { href: to };
    return (
      <Container as={as} {...url} {...other}>
        {children}
      </Container>
    );
  }
  return <Container {...other}>{children}</Container>;
}

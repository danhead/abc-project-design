import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "@emotion/styled";

const Link = styled(GatsbyLink)`
  display: inline-block;
  padding: 0;
  margin-bottom: var(--spacing-y-sm);
  color: var(--color-white);
  font-size: var(--font-size-xl);
  text-decoration: none;
  cursor: pointer;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px var(--color-white);
  }

  &:focus:not(:focus-visible) {
    box-shadow: none;
  }

  @media (min-width: 30em) {
    font-size: var(--font-size-sm);
    margin: 0 var(--spacing-x-xs);
    padding: 9px 0;
    border-bottom: 2px solid
      ${props =>
        props.active || props.partiallyActive
          ? `var(--color-white)`
          : `transparent`};
  }
`;

export default function NavLink({ children, ...other }) {
  return <Link {...other}>{children}</Link>;
}

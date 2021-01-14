import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";

const Link = styled(GatsbyLink)`
  display: inline-block;
  padding: 0;
  margin-bottom: var(--spacing-y-sm);
  color: var(--color-white);
  font-size: var(--font-size-lg);
  text-decoration: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  @media (min-width: 30em) {
    font-size: var(--font-size-sm);
    margin: 0 var(--spacing-x-xs);
    padding: 9px 0;
    border-bottom: 2px solid
      ${props => (props.active ? `var(--color-white)` : `transparent`)};
  }
`;

export default function NavLink({ children, to }) {
  return <Link to={to}>{children}</Link>;
}

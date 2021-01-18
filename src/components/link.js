import React from "react";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

const StyledLink = styled.a`
  font-size: ${props => `var(--font-size-${props.size})`};
  color: ${props => `var(--theme-color-${props.color})`};
  text-decoration: none;
`;

export default function Link({ children, to, ...other }) {
  const isInternal = /^\/(?!\/)/.test(to);
  return (
    <StyledLink href={to} as={isInternal ? GatsbyLink : "a"} {...other}>
      {children}
    </StyledLink>
  );
}

import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Link as GatsbyLink } from "gatsby";

const StyledLink = styled.a`
  ${props =>
    props.size &&
    css`
      font-size: var(--font-size-${props.size});
    `}
  ${props =>
    props.color &&
    css`
      color: var(--theme-color-${props.color});
    `}
  text-decoration: none;
`;

export default function Link({ children, to, ...other }) {
  if (/^\/(?!\/)/.test(to)) {
    return (
      <StyledLink to={to} as={GatsbyLink} {...other}>
        {children}
      </StyledLink>
    );
  }
  return (
    <StyledLink href={to} {...other}>
      {children}
    </StyledLink>
  );
}

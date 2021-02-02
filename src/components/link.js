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
  color: var(--color-dark);
  ${props =>
    props.noDecoration
      ? css`
          text-decoration: none;
        `
      : css`
          text-decoration-color: var(--color-primary);
          text-decoration-thickness: 2px;
          text-underline-offset: 3px;
        `}

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px var(--color-dark);
  }

  &:focus:not(:focus-visible) {
    box-shadow: none;
  }
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

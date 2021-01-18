import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  padding: var(--spacing-y-lg) var(--spacing-x-sm);
  ${props => !props.variant && `background-color: var(--color-white);`}
  ${props =>
    props.variant === "primary" &&
    `background-color: var(--theme-color-light);`}
  ${props =>
    props.variant === "transparent" &&
    `background-color: var(--color-semi-transparent);`}
`;

const Content = styled.div`
  max-width: var(--theme-max-width);
  margin: 0 auto;

  ${props =>
    props.grid > 0 &&
    css`
      @media (min-width: ${props.breakpoint}) {
        display: grid;
        grid-template-columns: repeat(${props.grid}, 1fr);
        gap: var(--spacing-x-xs);
      }
    `}
`;

export default function Section({
  children,
  variant,
  grid,
  breakpoint = "30em"
}) {
  return (
    <Container variant={variant}>
      <Content grid={grid} breakpoint={breakpoint}>
        {children}
      </Content>
    </Container>
  );
}

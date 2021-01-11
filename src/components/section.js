import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  padding: var(--spacing-y-md) var(--spacing-x-sm);
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
      @media (min-width: 30em) {
        display: grid;
        grid-template-columns: repeat(${props.grid}, 1fr);
        gap: var(--spacing-x-xs);
      }
    `}
`;

export default function Section({ children, variant, grid }) {
  return (
    <Container variant={variant}>
      <Content grid={grid}>{children}</Content>
    </Container>
  );
}

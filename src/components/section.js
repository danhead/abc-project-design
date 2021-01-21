import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Heading } from ".";

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
`;

const Body = styled.div`
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
  heading,
  headingElement = "h2",
  children,
  variant,
  grid,
  breakpoint = "30em"
}) {
  return (
    <Container variant={variant}>
      <Content>
        {heading && <Heading el={headingElement}>{heading}</Heading>}
        <Body grid={grid} breakpoint={breakpoint}>
          {children}
        </Body>
      </Content>
    </Container>
  );
}

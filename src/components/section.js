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

const Head = styled.div`
  text-align: center;
`;

const Body = styled.div`
  ${props =>
    props.grid > 0 &&
    css`
      display: grid;
      gap: var(--spacing-x-sm) 0;

      @media (min-width: ${props.breakpoint}) {
        grid-template-columns: repeat(${props.grid}, 1fr);
        gap: var(--spacing-x-md);
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
        {heading && (
          <Head>
            <Heading el={headingElement}>{heading}</Heading>
          </Head>
        )}
        <Body grid={grid} breakpoint={breakpoint}>
          {children}
        </Body>
      </Content>
    </Container>
  );
}

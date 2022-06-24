import React from "react";
import styled from "@emotion/styled";
import { Heading } from ".";

const Container = styled.div`
  padding: var(--spacing-y-lg) var(--spacing-x-sm);
  ${(props) => !props.variant && `background-color: var(--color-white);`}
  ${(props) =>
    props.variant === "primary" && `background-color: var(--color-light);`}
  ${(props) =>
    props.variant === "transparent" &&
    `background-color: var(--color-semi-transparent);`}
`;

const Content = styled.div`
  max-width: var(--page-max-width);
  margin: 0 auto;
`;

const Head = styled.div`
  text-align: center;
`;

export default function Section({
  heading,
  headingElement = "h2",
  children,
  variant,
}) {
  return (
    <Container variant={variant}>
      <Content>
        {heading && (
          <Head>
            <Heading el={headingElement}>{heading}</Heading>
          </Head>
        )}
        {children}
      </Content>
    </Container>
  );
}

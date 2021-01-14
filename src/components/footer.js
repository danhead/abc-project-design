import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  background-color: var(--color-white);
  border-top: 1px solid var(--color-dark-grey);
`;

const Content = styled.div`
  max-width: var(--theme-max-width);
  margin: 0 auto;
  padding: var(--spacing-y-lg) var(--spacing-x-sm);
  font-size: var(--font-size-sm);
  text-align: center;
`;

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container>
      <Content>&copy; {year} Abc Project Ltd</Content>
    </Container>
  );
}

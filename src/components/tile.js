import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-mid-grey);
`;

const Media = styled.div`
  width: 32px;
  height: 32px;
  margin-bottom: var(--spacing-y-sm);

  svg {
    max-width: 100%;
    max-height: 100%;
  }
`;

const Body = styled.div`
  text-align: center;

  > :not(p) {
    min-height: calc(var(--line-height) * 2em);
  }
`;
export default function Tile({ icon, children }) {
  return (
    <Container>
      {icon && <Media>{icon}</Media>}
      <Body>{children}</Body>
    </Container>
  );
}

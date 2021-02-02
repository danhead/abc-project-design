import React from "react";
import styled from "@emotion/styled";

const Container = styled.label`
  display: block;
  margin-bottom: var(--spacing-y-xs);
  font-size: var(--font-size-sm);
`;

export default function Label({ id, children }) {
  return <Container htmlFor={id}>{children}</Container>;
}

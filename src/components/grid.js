import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Container = styled.div`
  display: grid;
  gap: var(--spacing-x-sm) var(--spacing-y-sm);
  ${props =>
    props.columns &&
    props.columns.map((column, i) =>
      i === 0 && column > 1
        ? css`
            grid-template-columns: repeat(${column}, minmax(10px, 1fr));
          `
        : css`
  @media (min-width: ${props.breakpoints[i - 1]}) {
    grid-template-columns: repeat(${column}, minmax(10px, 1fr));
    ${
      i === 1 &&
      css`
        gap: var(--spacing-x-md) var(--spacing-y-md);
      `
    }
`
    )}
`;

export default function Grid({ columns, breakpoints = ["30em"], children }) {
  return (
    <Container columns={columns} breakpoints={breakpoints}>
      {children}
    </Container>
  );
}

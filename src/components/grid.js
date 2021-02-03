import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Container = styled.div`
  display: grid;
  gap: var(--spacing-y-sm) var(--spacing-x-md);
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
        gap: var(--spacing-y-md) var(--spacing-x-lg);
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

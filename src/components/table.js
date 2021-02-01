import React from "react";
import styled from "@emotion/styled";

const CustomTable = styled.table`
  margin-bottom: var(--spacing-y-md);
  border-collapse: collapse;

  td {
    padding: var(--spacing-y-xs) var(--spacing-x-sm);
    border: 1px solid var(--color-dark-grey);
  }

  td:first-of-type {
    font-weight: 700;
    text-align: right;
  }
`;

export default function Table({ children }) {
  return <CustomTable>{children}</CustomTable>;
}

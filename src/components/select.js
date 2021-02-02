import React from "react";
import styled from "@emotion/styled";

const Select = styled.select`
  width: 100%;
  margin-bottom: var(--spacing-y-sm);
  padding: var(--spacing-y-xs) var(--spacing-x-sm);
  background-color: var(--color-white);
  border: 1px solid var(--color-dark);
`;

export default function InputSelect({ id, name, value, options = [] }) {
  return (
    <Select id={id} name={name} value={value}>
      {options.map((opt, i) => (
        <option value={opt.value} key={i}>
          {opt.label}
        </option>
      ))}
    </Select>
  );
}

import React from "react";
import styled from "@emotion/styled";

const Input = styled.input`
  width: 100%;
  margin-bottom: var(--spacing-y-sm);
  padding: var(--spacing-y-xs) var(--spacing-x-sm);
  border: 1px solid var(--color-dark);

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px var(--color-dark);
  }

  &:focus:not(:focus-visible) {
    box-shadow: none;
  }
`;

export default function InputText({
  id,
  name,
  value,
  onChange,
  required,
  textArea
}) {
  return (
    <Input
      type="text"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      as={textArea ? "textarea" : "input"}
    />
  );
}

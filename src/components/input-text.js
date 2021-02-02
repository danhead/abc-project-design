import React from "react";
import styled from "@emotion/styled";

const Input = styled.input`
  width: 100%;
  margin-bottom: var(--spacing-y-sm);
  padding: var(--spacing-y-xs) var(--spacing-x-sm);
  border: 1px solid var(--color-dark);
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

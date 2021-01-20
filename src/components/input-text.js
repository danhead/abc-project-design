import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 320px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: var(--spacing-y-xs);
  font-size: var(--font-size-sm);
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: var(--spacing-y-sm);
  padding: var(--spacing-y-xs) var(--spacing-x-sm);
  border: 1px solid var(--theme-color-dark);
`;

export default function InputText({
  id,
  name,
  label,
  value,
  onChange,
  required,
  textArea
}) {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        as={textArea ? "textarea" : "input"}
      />
    </Container>
  );
}

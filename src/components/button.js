import React from "react";
import styled from "styled-components";

const Container = styled.button`
  background-color: transparent;
  margin: 0;
  padding: 4px 8px;
  border: 1px solid var(--color-black);
  border-radius: 4px;
`;

export default function Button({ children, ...other }) {
  return <Container {...other}>{children}</Container>;
}

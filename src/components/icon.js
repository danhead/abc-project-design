import React from "react";
import styled from "styled-components";

const Container = styled.span`
  display: inline-block;
  width: ${props => `var(--icon-size-${props.size})`};
  height: ${props => `var(--icon-size-${props.size})`};
  color: ${props => `var(--theme-color-${props.color})`};

  svg {
    width: 100%;
    height: 100%;
  }
`;

export default function Icon({ children, size = "md", color }) {
  return (
    <Container size={size} color={color}>
      {children}
    </Container>
  );
}

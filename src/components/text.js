import React from "react";
import styled, { css } from "styled-components";

const StyledText = styled.p`
  margin-bottom: var(--spacing-y-xs);
  ${props =>
    props.textStyle &&
    css`
      font-style: ${props.textStyle};
    `}
  ${props =>
    props.size === "sm" &&
    css`
      font-size: var(--font-size-sm);
    `}
`;

export default function Text({ children, ...props }) {
  return <StyledText {...props}>{children}</StyledText>;
}

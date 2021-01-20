import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const StyledText = styled.p`
  margin-bottom: var(--spacing-y-xs);
  ${props =>
    props.textStyle &&
    css`
      font-style: ${props.textStyle};
    `}
  font-size: ${props => `var(--font-size-${props.size})`};
  color: ${props => `var(--theme-color-${props.color})`};
`;

export default function Text({ children, ...props }) {
  return <StyledText {...props}>{children}</StyledText>;
}

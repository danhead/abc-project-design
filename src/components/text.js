import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const StyledText = styled.p`
  margin: ${props => (props.noMargin ? 0 : `0 0 var(--spacing-y-md)`)};
  ${props =>
    props.textStyle &&
    css`
      font-style: ${props.textStyle};
    `}
  ${props =>
    props.align &&
    css`
      text-align: ${props.align};
    `}
  font-size: ${props => `var(--font-size-${props.size})`};
  color: ${props => `var(--theme-color-${props.color})`};
`;

export default function Text({ children, ...props }) {
  return <StyledText {...props}>{children}</StyledText>;
}

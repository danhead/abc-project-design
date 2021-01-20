import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  transform: ${props =>
    props.offset
      ? `perspective(500px) translate3d(-10%, 0, -200px)`
      : `translate3d(0, 0, 0)`};
  transform-origin: top left;
  transition: transform 0.15s;
`;

export default function Content({ children, offset }) {
  return <Container offset={offset}>{children}</Container>;
}

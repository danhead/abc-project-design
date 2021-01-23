import React from "react";
import Img from "gatsby-image";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
const Container = styled.header`
  position: relative;
  height: 50vh;
  max-height: 1200px;
  color: white;
`;

const Content = styled.div`
  position: absolute;
  ${props =>
    props.posY !== "bottom" &&
    css`
      top: ${props.posY === "top" ? 0 : "50%"};
    `}
  ${props =>
    props.posY === "bottom" &&
    css`
      bottom: 0;
    `}
  ${props =>
    props.posX !== "right" &&
    css`
      left: ${props.posX === "left" ? 0 : "50%"};
    `}
  ${props =>
    props.posX === "right" &&
    css`
      right: 0;
    `}
  transform: translate(
    ${props => (props.posX === "middle" ? "-50%" : 0)},
    ${props => (props.posY === "middle" ? "-50%" : 0)}
  );
  max-width: var(--theme-max-width);
  padding: var(--spacing-y-sm) var(--spacing-x-sm);
  text-align: center;
`;

export default function Header({
  image,
  position = "middle middle",
  children
}) {
  const [posY, posX] = position.split(" ");
  return (
    <Container>
      {image && <Img style={{ height: "100%" }} fluid={image} />}
      <Content posX={posX} posY={posY}>
        {children}
      </Content>
    </Container>
  );
}

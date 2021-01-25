import React from "react";
import Img from "gatsby-image";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
const Container = styled.header`
  position: relative;
  height: 50vh;
  color: white;
  ${props => props.avoidNav && `margin-top: 40px;`}
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

const Map = styled.div``;

export default function Header({
  image,
  map,
  position = "middle middle",
  avoidNav,
  children
}) {
  const [posY, posX] = position.split(" ");
  return (
    <Container avoidNav={avoidNav}>
      {image && <Img style={{ height: "100%" }} fluid={image} />}
      {map && <Map>{map}</Map>}
      <Content posX={posX} posY={posY}>
        {children}
      </Content>
    </Container>
  );
}

import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Heading, Text } from ".";
import LogoArrows from "../icons/logo-arrows.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top = styled.div`
  width: 120px;
  height: 60px;
  filter: grayscale(100%);
  opacity: 0;
  transform: translate3d(0, 50%, 0);
  transition: opacity 0.5s ease-in, filter 0.5s ease-in 0.5s,
    transform 0.5s ease-in 0.5s;

  path:first-of-type {
    fill: var(--theme-color-primary);
  }

  path:last-of-type {
    fill: var(--theme-color-secondary);
  }

  ${props =>
    props.visible &&
    css`
      filter: none;
      opacity: 1;
      transform: translate3d(0, 0, 0);
    `}
`;

const Middle = styled.div`
  width: 100vw;
  opacity: 0;
  transition: opacity 0.5s ease-in 0.75s;
  ${props =>
    props.visible &&
    css`
      opacity: 1;
    `}
`;

const Bottom = styled.div`
  width: 120px;
  height: 60px;
  filter: grayscale(100%);
  opacity: 0;
  transform: translate3d(0, -50%, 0) rotate(180deg);
  transition: opacity 0.5s ease-in, filter 0.5s ease-in 0.5s,
    transform 0.5s ease-in 0.5s;

  path:first-of-type {
    fill: var(--theme-color-dark);
  }

  path:last-of-type {
    fill: var(--theme-color-secondary);
  }

  ${props =>
    props.visible &&
    css`
      filter: none;
      opacity: 1;
      transform: translate3d(0, 0, 0) rotate(180deg);
    `}
`;

export default function HeaderLogo({ transition }) {
  const [visible, setVisible] = useState(!transition);
  useEffect(() => transition && setVisible(true), [transition]);
  return (
    <Container>
      <Top visible={visible}>
        <LogoArrows />
      </Top>
      <Middle visible={visible}>
        <Heading withShadow noMargin>
          Abc Project Design Ltd
        </Heading>
        <Text size="lg">Easy as ABC</Text>
      </Middle>
      <Bottom visible={visible}>
        <LogoArrows />
      </Bottom>
    </Container>
  );
}

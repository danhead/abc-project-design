import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
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

const Heading = styled.h1`
  margin: 0 var(--spacing-x-xs) var(--spacing-y-xs);
  font-size: var(--font-size-xl);
  text-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
`;

const Slogan = styled.p`
  margin: 0 var(--spacing-x-xs) var(--spacing-y-xs);
  font-size: var(--font-size-lg);
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
        <Heading>Abc Project Design Ltd</Heading>
        <Slogan>Easy as ABC</Slogan>
      </Middle>
      <Bottom visible={visible}>
        <LogoArrows />
      </Bottom>
    </Container>
  );
}

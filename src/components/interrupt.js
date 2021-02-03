import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const Keyframes = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.75);
`;

const Spinner = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;

const Ball = styled.div`
  animation: ${Keyframes} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--color-dark);
    margin: -4px 0 0 -4px;
  }
`;

const BallA = styled(Ball)`
  animation-delay: -0.036s;
  &:after {
    top: 63px;
    left: 63px;
  }
`;

const BallB = styled(Ball)`
  animation-delay: -0.072s;
  &:after {
    top: 68px;
    left: 56px;
  }
`;

const BallC = styled(Ball)`
  animation-delay: -0.108s;
  &:after {
    top: 71px;
    left: 48px;
  }
`;

const BallD = styled(Ball)`
  animation-delay: -0.144s;
  &:after {
    top: 72px;
    left: 40px;
  }
`;

const BallE = styled(Ball)`
  animation-delay: -0.18s;
  &:after {
    top: 71px;
    left: 32px;
  }
`;

const BallF = styled(Ball)`
  animation-delay: -0.216s;
  &:after {
    top: 68px;
    left: 24px;
  }
`;

const BallG = styled(Ball)`
  animation-delay: -0.252s;
  &:after {
    top: 63px;
    left: 17px;
  }
`;

const BallH = styled(Ball)`
  animation-delay: -0.288s;
  &:after {
    top: 56px;
    left: 12px;
  }
`;

export default function Interrupt() {
  return (
    <Container>
      <Spinner>
        <BallA />
        <BallB />
        <BallC />
        <BallD />
        <BallE />
        <BallF />
        <BallG />
        <BallH />
      </Spinner>
    </Container>
  );
}

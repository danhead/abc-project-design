import React from "react";
import styled from "@emotion/styled";

const Container = styled.button`
  position: relative;
  display: block;
  height: 32px;
  width: 24px;
  background-color: transparent;
  padding: 4px 8px;
  border: 0;
  cursor: pointer;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px var(--color-white);
  }

  &:focus:not(:focus-visible) {
    box-shadow: none;
  }

  @media (min-width: 30em) {
    display: none;
  }
`;

const Bar = styled.span`
  position: absolute;
  right: 0;
  left: 0;
  border-top: 3px solid var(--color-white);
  backface-visibility: hidden;
`;

const TopBar = styled(Bar)`
  top: 5px;
  transform: ${props =>
    props.open
      ? `translate3d(0, 10px, 0) rotate(50deg)`
      : `translate3d(0, 0, 0) rotate(0)`};
  transition: 0.55s 0.5s;
`;

const MiddleBar = styled(Bar)`
  top: 15px;
  opacity: ${props => (props.open ? 0 : 1)};
  transition: opacity 1s ease-in;
`;

const BottomBar = styled(Bar)`
  top: 25px;
  transform: ${props =>
    props.open
      ? `translate3d(0, -10px, 0) rotate(-410deg)`
      : `translate3d(0, 0, 0) rotate(0)`};
  transition: 0.55s 0.5s;
`;

export default function MenuButton({ open, ...other }) {
  return (
    <Container
      aria-label={open ? "Close navigation" : "Open navigation"}
      {...other}
    >
      <TopBar open={open} />
      <MiddleBar open={open} />
      <BottomBar open={open} />
    </Container>
  );
}

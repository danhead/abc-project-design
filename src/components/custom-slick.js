import React, { useEffect, useRef } from "react";
import Slick from "react-slick";
import styled, { css } from "styled-components";
import LeftArrow from "../icons/left-arrow.svg";
import RightArrow from "../icons/right-arrow.svg";
import "slick-carousel/slick/slick.css";

const Button = styled.button`
  position: absolute;
  top: 50%;
  ${props =>
    props.variant === "right" &&
    css`
      right: 0;
    `}
  z-index: 2;
  background-color: transparent;
  color: var(--theme-color-dark);
  border: none;
  margin: 0;
  padding: 0;
  opacity: 0.5;
  transform: translateY(-50%);
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  svg {
    width: 32px;
    height: 32px;
  }
`;

const StyledButton = ({ to, onClick }) => (
  <Button
    type="button"
    onClick={onClick}
    aria-label={to}
    variant={to === "prev" ? "left" : "right"}
  >
    {to === "prev" ? <LeftArrow /> : <RightArrow />}
  </Button>
);
export default function CustomSlick({ children }) {
  const slick = useRef();
  const settings = {
    prevArrow: <StyledButton to="prev" />,
    nextArrow: <StyledButton to="next" />,
    infinite: true,
    speed: 500,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  useEffect(() => {
    slick.current.slickPlay();
  }, [slick]);
  return (
    <Slick ref={slick} {...settings}>
      {children}
    </Slick>
  );
}

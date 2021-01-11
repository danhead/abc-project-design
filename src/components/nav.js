import React from "react";
import styled from "styled-components";
import NavLink from "./nav-link";
import MenuButton from "./menu-button";

const Container = styled.div`
  position: ${props => (props.open ? "fixed" : "absolute")};
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 6;
  transform: ${props =>
    props.open ? `translate3d(0, 0, 0)` : `translate3d(100%, 0, 0)`};
  transition: transform 0.15s;

  @media (min-width: 30em) {
    bottom: auto;
    left: 0;
    display: flex;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2px);
    transform: none;
    transition: none;
  }
`;

const Menu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: var(--spacing-y-xs) var(--spacing-x-md) 0 0;
  transform: translateX(-100%);

  @media (min-width: 30em) {
    display: none;
  }
`;

const Content = styled.nav`
  margin: 0 var(--spacing-x-sm);

  @media (max-width: 30em) {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const Overlay = styled.div`
  @media (max-width: 30em) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
    display: ${props => (props.visible ? `block` : `none`)};
    background-color: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(2px);
  }
`;

const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: 30em) {
    flex-direction: column;
  }
`;

export default function Nav({ data, open, setOpen }) {
  const handleOverlayClick = () => setOpen(false);
  const handleButtonClick = () => setOpen(!open);
  return (
    <>
      <Container open={open}>
        <Menu>
          <MenuButton open={open} onClick={handleButtonClick} />
        </Menu>
        <Content>
          <List>
            {data.map((link, i) => (
              <NavLink key={i} subNav={link.subNav} to={link.to}>
                {link.title}
              </NavLink>
            ))}
          </List>
        </Content>
      </Container>
      <Overlay visible={open} onClick={handleOverlayClick} />
    </>
  );
}

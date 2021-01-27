import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { MenuButton, NavItem } from ".";
import LogoArrows from "../icons/logo-arrows.svg";

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 6;
  background-color: ${props =>
    props.open ? `rgba(0, 0, 0, 0.8)` : `rgba(0, 0, 0, 0.4)`};
  backdrop-filter: blur(2px);
  transform: ${props =>
    props.open
      ? `translate3d(0, 0, 0)`
      : `translate3d(0, calc(-100% + 40px), 0)`};
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
  @media (min-width: 30em) {
    position: absolute;
    bottom: auto;
    background-color: rgba(0, 0, 0, 0.6);
    transform: none;
    transition: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  max-width: var(--theme-max-width);
  margin: 0 auto;
  @media (min-width: 30em) {
    flex-direction: row;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  color: white;
  margin: var(--spacing-x-xs) var(--spacing-y-sm);
`;

const Heading = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  opacity: ${props => (props.hidden ? 0 : 1)};
  transform: opacity 0.3s ease-in;

  svg {
    width: 24px;
    height: 12px;

    &:first-of-type {
      path:first-of-type {
        fill: var(--theme-color-primary);
      }

      path:last-of-type {
        fill: var(--theme-color-secondary);
      }
    }
    &:last-of-type {
      transform: rotate(180deg);
      path:first-of-type {
        fill: var(--theme-color-dark);
      }

      path:last-of-type {
        fill: var(--theme-color-secondary);
      }
    }
  }
`;

const Content = styled.nav`
  flex-grow: 1;
  margin: var(--spacing-y-lg) var(--spacing-x-md);
  overflow-y: auto;

  @media (min-width: 30em) {
    display: flex;
    margin: 0;
    overflow-y: visible;
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

export default function Nav({ location, data, open, setOpen }) {
  const handleButtonClick = () => setOpen(!open);
  return (
    <Container open={open}>
      <Wrapper>
        <Menu>
          <Heading to="/" hidden={open} aria-label="Back home">
            <LogoArrows />
            <LogoArrows />
          </Heading>
          <MenuButton open={open} onClick={handleButtonClick} />
        </Menu>
        <Content>
          <List>
            {data.map((link, i) => (
              <NavItem
                key={i}
                index={i}
                subNav={link.subNav}
                to={link.to}
                location={location}
                active={location === link.to}
                partiallyActive={
                  link.subNav && location && location.indexOf(link.to) === 0
                }
                open={open}
              >
                {link.title}
              </NavItem>
            ))}
          </List>
        </Content>
      </Wrapper>
    </Container>
  );
}

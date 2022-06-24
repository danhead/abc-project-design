import React from "react";
import styled from "@emotion/styled";
import NavLink from "./nav-link";

const SubList = styled.ul`
  margin: 0 0 0 var(--spacing-x-md);
  padding: 0;
  list-style: none;

  @media (min-width: 30em) {
    display: none;
    flex-direction: column;
    position: absolute;
    margin: 0;
    padding: var(--spacing-y-xs) var(--spacing-x-xs);
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(2px);
  }
`;

const ListItem = styled.li`
  position: relative;

  &:focus-within ${SubList}, &:hover ${SubList} {
    @media (min-width: 30em) {
      display: flex;
    }
  }

  @media (max-width: 30em) {
    transform: ${(props) =>
      props.open ? `translate3d(0, 0, 0)` : `translate3d(-100%, 0, 0)`};
    transition: transform 0.3s ease-in-out
      calc(0.15s + (${(props) => props.index} * 0.1s));
  }
`;

export default function NavItem({
  children,
  subNav,
  index,
  open,
  location,
  to,
  ...other
}) {
  const hasChildren = subNav && subNav.length > 0;
  return (
    <ListItem open={open} index={index}>
      <NavLink to={to} {...other}>
        {children}
      </NavLink>
      {hasChildren && (
        <SubList>
          {subNav.map((link, i) => (
            <ListItem key={i} index={i} open={open}>
              <NavLink location={location} to={link.to}>
                {link.title}
              </NavLink>
            </ListItem>
          ))}
        </SubList>
      )}
    </ListItem>
  );
}

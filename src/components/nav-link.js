import React from "react";
import styled, { css } from "styled-components";
import { Link as GatsbyLink } from "gatsby";

const SubList = styled.ul`
  position: absolute;
  display: none;
  flex-direction: column;
  min-width: 120px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  position: relative;
  margin: 0 var(--spacing-y-xs);

  &:hover ${SubList} {
    @media (min-width: 40rem) {
      display: flex;
    }
  }
`;

const Link = styled(GatsbyLink)`
  display: block;
  color: white;
  text-decoration: none;
  padding: 5px;
  margin-top: var(--spacing-y-xs);
  border-bottom: 2px solid transparent;

  ${props =>
    props.active &&
    css`
      border-color: var(--color-white);
    `}
`;

export default function NavLink({ children, subLinks, ...other }) {
  return (
    <ListItem>
      <Link {...other}>{children}</Link>
      {subLinks && subLinks.length > 0 && (
        <SubList>
          {subLinks.map((link, i) => (
            <Link to={link.to} key={i}>
              {link.title}
            </Link>
          ))}
        </SubList>
      )}
    </ListItem>
  );
}

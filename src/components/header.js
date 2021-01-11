import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const Container = styled.header`
  position: relative;
  height: 60vh;
  max-height: 1200px;
  color: white;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: var(--theme-max-width);
  text-align: center;
`;

export default function Header({ image, children }) {
  return (
    <Container>
      {image && <Img style={{ height: "100%" }} fluid={image} />}
      <Content>{children}</Content>
    </Container>
  );
}
/*

import React, { useState } from "react";
import styled from "styled-components";
import MenuButton from "./menu-button";
import Nav from "./nav";

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  background-color: rgba(0, 0, 0, 0.25);
  color: white;
`;

const Content = styled.div`
  max-width: var(--theme-max-width);
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 var(--spacing-x-xs);
`;

const Menu = styled.div`
  padding: 0 var(--spacing-x-xs);
  @media (min-width: 40rem) {
    display: none;
  }
`;

export default function Header() {
  const [navOpen, setNavOpen] = useState();
  const handleMenuClick = () => setNavOpen(!navOpen);
  return (
    <Container>
      <Content>
        <Nav open={navOpen} setOpen={setNavOpen} />
      </Content>
      <Menu>
        <MenuButton onClick={handleMenuClick} />
      </Menu>
    </Container>
  );
}
*/

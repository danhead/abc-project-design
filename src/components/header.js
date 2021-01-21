import React from "react";
import Img from "gatsby-image";
import styled from "@emotion/styled";

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

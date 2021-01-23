import React from "react";
import { Link as GatsbyLink } from "gatsby";
import Img from "gatsby-image";
import styled from "@emotion/styled";

const Media = styled.div`
  transition: transform 0.15s ease-in;
`;
const Heading = styled.div``;
const Body = styled.div``;

const Content = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--spacing-y-sm) var(--spacing-x-xs);
  color: var(--color-white);
  text-align: center;
  background-color: rgba(0, 0, 0, 0.25);
  transform: translate3d(0, calc(100% - 58px), 0);
  transition: transform 0.15s ease-in, background-color 0.3s ease-in;
`;

const Container = styled.div`
  position: relative;
  overflow: hidden;
  &:hover ${Content} {
    background-color: rgba(0, 0, 0, 0.65);
    transform: translate3d(0, 0, 0);
  }
  &:hover ${Media} {
    transform: scale(1.05);
  }
`;

const Link = styled(GatsbyLink)`
  outline: 0;
  text-decoration: none;
`;

export default function Card({ image, heading, children, to }) {
  const render = () => (
    <Container>
      {image && (
        <Media>
          <Img fluid={image} />
        </Media>
      )}
      <Content>
        {heading && <Heading>{heading}</Heading>}
        <Body>{children}</Body>
      </Content>
    </Container>
  );
  return to ? <Link to={to}>{render()}</Link> : render();
}

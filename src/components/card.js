import React from "react";
import { Link as GatsbyLink } from "gatsby";
import Img from "gatsby-image";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 calc(var(--spacing-x-xs) * -1) var(--spacing-y-sm);

  @media (max-width: 30em) {
    &:nth-of-type(even) {
      flex-direction: row-reverse;
    }
  }
`;

const Media = styled.span`
  padding: 0 var(--spacing-x-xs);
  transition: transform 0.15s ease-in, filter 0.15s ease-in;
`;

const Content = styled.span`
  padding: 0 var(--spacing-x-xs);
`;

const Link = styled(GatsbyLink)`
  outline: 0;
  text-decoration: none;
  color: var(--color-black);

  &:hover ${Media} {
    transform: scale(1.1);
    filter: brightness(110%) contrast(110%);
  }

  @media (max-width: 30em) {
    &:nth-of-type(even) ${Container} {
      flex-direction: row-reverse;
    }
  }
`;

export default function Card({ image, children, to }) {
  const render = () => (
    <Container>
      {image && (
        <Media>
          <Img
            style={{
              display: "block",
              borderRadius: "5px"
            }}
            fixed={image}
          />
        </Media>
      )}
      <Content>{children}</Content>
    </Container>
  );
  return to ? <Link to={to}>{render()}</Link> : render();
}

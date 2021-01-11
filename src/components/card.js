import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  margin: 0 calc(var(--spacing-x-xs) * -1) var(--spacing-y-sm);

  @media (max-width: 30em) {
    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }
`;

const Media = styled.div`
  padding: 0 var(--spacing-x-xs);
`;
const Content = styled.div`
  padding: 0 var(--spacing-x-xs);
`;

export default function Card({ image, children }) {
  return (
    <Container>
      {image && (
        <Media>
          <Img
            style={{
              display: "block",
              "border-radius": "5px"
            }}
            fixed={image}
          />
        </Media>
      )}
      <Content>{children}</Content>
    </Container>
  );
}

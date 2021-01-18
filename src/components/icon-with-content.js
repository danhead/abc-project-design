import React from "react";
import styled from "styled-components";
import { Icon } from "./";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-y-sm);
`;

const IconWrapper = styled.div`
  margin-right: var(--spacing-x-sm);
`;

const Content = styled.div`
  p {
    margin-bottom: 0;
  }
`;

export default function IconWithContent({ children }) {
  return (
    <Container>
      {children.map(child => {
        if (child.type === Icon) {
          return <IconWrapper key="icon">{child}</IconWrapper>;
        }
        return <Content key="content">{child}</Content>;
      })}
    </Container>
  );
}

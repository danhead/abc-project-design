import React from "react";
import styled from "@emotion/styled";
import { Icon } from "./";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
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
      {children.map((child) => {
        if (child.type === Icon) {
          return <IconWrapper key="icon">{child}</IconWrapper>;
        }
        return <Content key="content">{child}</Content>;
      })}
    </Container>
  );
}

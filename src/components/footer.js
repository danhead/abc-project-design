import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Grid, IconWithContent, Icon, Link, Text } from ".";
import Envelope from "../icons/envelope.svg";
import Phone from "../icons/phone.svg";

const Container = styled.footer`
  background-color: var(--color-white);
  border-top: 1px solid var(--color-dark-grey);
`;

const Content = styled.div`
  max-width: var(--page-max-width);
  margin: 0 auto;
  padding: var(--spacing-y-lg) var(--spacing-x-sm);
  font-size: var(--font-size-sm);
  text-align: center;
`;

const Cell = styled.div`
  display: flex;
  flex-direction: column;
  ${props =>
    props.flexEnd &&
    css`
      @media (min-width: ${props.flexEnd}) {
        align-items: flex-end;
      }
    `}
`;

const Item = styled.div`
  margin-bottom: var(--spacing-y-sm);
`;

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container>
      <Content>
        <Grid columns={[1, 2]} breakpoints={["45em"]}>
          <Cell>
            <Item>
              <IconWithContent>
                <Icon color="dark" size="lg">
                  <Phone />
                </Icon>
                <Link
                  weight="bold"
                  color="dark"
                  size="lg"
                  to="tel:+447539051512"
                  noDecoration
                >
                  07539 051512
                </Link>
              </IconWithContent>
            </Item>
            <Item>
              <IconWithContent>
                <Icon color="dark" size="lg">
                  <Phone />
                </Icon>
                <Link
                  weight="bold"
                  color="dark"
                  size="lg"
                  to="tel:+447378839358"
                  noDecoration
                >
                  07378 839358
                </Link>
              </IconWithContent>
            </Item>
          </Cell>
          <Cell flexEnd={"45em"}>
            <Item>
              <IconWithContent>
                <Icon color="dark" size="lg">
                  <Envelope />
                </Icon>
                <Link
                  weight="bold"
                  color="dark"
                  size="md"
                  to="mailto:quotations@abcprojectdesign.com"
                  noDecoration
                >
                  quotations@abcprojectdesign.com
                </Link>
              </IconWithContent>
            </Item>
          </Cell>
        </Grid>
        <Text size="xs">&copy; {year} Abc Project Ltd</Text>
      </Content>
    </Container>
  );
}

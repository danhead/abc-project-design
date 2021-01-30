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
  ${props =>
    props.flexEnd &&
    css`
      @media (min-width: ${props.flexEnd}) {
        justify-content: flex-end;
      }
    `}
`;

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container>
      <Content>
        <Grid columns={[1, 2]} breakpoints={["45em"]}>
          <Cell>
            <IconWithContent>
              <Icon color="dark" size="lg">
                <Phone />
              </Icon>
              <Link color="dark" size="lg" to="tel:+447123456789">
                07123 456789
              </Link>
            </IconWithContent>
          </Cell>
          <Cell flexEnd={"45em"}>
            <IconWithContent>
              <Icon color="dark" size="lg">
                <Envelope />
              </Icon>
              <Link
                color="dark"
                size="md"
                to="mailto:quotations@abcprojectdesign.com"
              >
                quotations@abcprojectdesign.com
              </Link>
            </IconWithContent>
          </Cell>
        </Grid>
        <Text size="xs">&copy; {year} Abc Project Ltd</Text>
      </Content>
    </Container>
  );
}

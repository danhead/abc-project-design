import React from "react";
import styled from "@emotion/styled";
import { Grid, IconWithContent, Icon, Link, Text } from ".";
import Envelope from "../icons/envelope.svg";
import Phone from "../icons/phone.svg";

const Container = styled.footer`
  background-color: var(--color-white);
  border-top: 1px solid var(--color-dark-grey);
`;

const Content = styled.div`
  max-width: var(--theme-max-width);
  margin: 0 auto;
  padding: var(--spacing-y-lg) var(--spacing-x-sm);
  font-size: var(--font-size-sm);
  text-align: center;
`;

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container>
      <Content>
        <Grid columns={[1, 2]}>
          <IconWithContent>
            <Icon color="dark" size="lg">
              <Phone />
            </Icon>
            <Text color="dark" size="lg">
              07123 456789
            </Text>
          </IconWithContent>
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
        </Grid>
        <div>&copy; {year} Abc Project Ltd</div>
      </Content>
    </Container>
  );
}

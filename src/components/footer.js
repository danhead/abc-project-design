import React from "react";
import { graphql, StaticQuery } from "gatsby";
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
    <StaticQuery
      query={graphql`
        query {
          allPerson(filter: { name: { eq: "Nicholas Day" } }) {
            nodes {
              phone
              altPhone
              email
            }
          }
        }
      `}
      render={data => {
        const { phone, altPhone, email } = data.allPerson.nodes[0];
        return (
          <Container>
            <Content>
              <Grid columns={[1, 2]} breakpoints={["45em"]}>
                <Cell>
                  {phone && (
                    <Item>
                      <IconWithContent>
                        <Icon color="dark" size="lg">
                          <Phone />
                        </Icon>
                        <Link
                          weight="bold"
                          color="dark"
                          size="lg"
                          to={`tel:${phone
                            .replace(/ /, "")
                            .replace(/^0/, "+44")}`}
                          noDecoration
                        >
                          {phone}
                        </Link>
                      </IconWithContent>
                    </Item>
                  )}
                  {altPhone && (
                    <Item>
                      <IconWithContent>
                        <Icon color="dark" size="lg">
                          <Phone />
                        </Icon>
                        <Link
                          weight="bold"
                          color="dark"
                          size="lg"
                          to={`tel:${altPhone
                            .replace(/ /, "")
                            .replace(/^0/, "+44")}`}
                          noDecoration
                        >
                          {altPhone}
                        </Link>
                      </IconWithContent>
                    </Item>
                  )}
                </Cell>
                <Cell flexEnd={"45em"}>
                  {email && (
                    <Item>
                      <IconWithContent>
                        <Icon color="dark" size="lg">
                          <Envelope />
                        </Icon>
                        <Link
                          weight="bold"
                          color="dark"
                          size="md"
                          to={`mailto:${email}`}
                          noDecoration
                        >
                          {email}
                        </Link>
                      </IconWithContent>
                    </Item>
                  )}
                </Cell>
              </Grid>
              <Text size="xs">&copy; {year} Abc Project Ltd</Text>
            </Content>
          </Container>
        );
      }}
    />
  );
}

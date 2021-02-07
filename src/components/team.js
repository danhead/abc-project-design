import React from "react";
import styled from "@emotion/styled";
import { Icon, IconWithContent, Link, Text } from ".";
import PhoneIcon from "../icons/phone.svg";
import EnvelopeIcon from "../icons/envelope.svg";

const Container = styled.ul`
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  margin-bottom: var(--spacing-y-md);
`;

export default function Team({ team = [] }) {
  return (
    <Container>
      {team.map((person, i) => (
        <Item key={i}>
          <div>
            <Text size="sm" noMargin>
              <strong>{person.name}</strong> &ndash; {person.title}
            </Text>
          </div>
          <div>
            {person.phone && (
              <IconWithContent>
                <Icon color="dark" size="sm">
                  <PhoneIcon />
                </Icon>
                <Link
                  weight="bold"
                  color="dark"
                  size="sm"
                  to={`tel:${person.phone
                    .replace(/ /g, "")
                    .replace(/^0/, "+44")}`}
                  noDecoration
                >
                  {person.phone}
                </Link>
              </IconWithContent>
            )}
            {person.email && (
              <IconWithContent>
                <Icon color="dark" size="sm">
                  <EnvelopeIcon />
                </Icon>
                <Link
                  weight="bold"
                  color="dark"
                  size="sm"
                  to={`mailto:${person.email}`}
                  noDecoration
                >
                  {person.email}
                </Link>
              </IconWithContent>
            )}
          </div>
        </Item>
      ))}
    </Container>
  );
}

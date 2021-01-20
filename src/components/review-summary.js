import React from "react";
import styled from "@emotion/styled";
import Text from "./text";
import RatedPeople from "../icons/rated-people.svg";
import Bark from "../icons/bark.svg";
import QuoteLeft from "../icons/quote-left.svg";
import QuoteRight from "../icons/quote-right.svg";
import Pen from "../icons/pen.svg";
import Calendar from "../icons/calendar.svg";

const ICONS = {
  Bark: <Bark />,
  "Rated People": <RatedPeople />
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 var(--spacing-x-xl);
`;

const Heading = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: var(--spacing-y-sm);
`;

const Icon = styled.div`
  width: 32px;
  height: 32px;
  margin-right: var(--spacing-x-sm);

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Content = styled.div`
  margin: 0 var(--spacing-x-xl);
  text-align: center;
`;

const Quote = styled.div`
  position: relative;
  margin-bottom: var(--spacing-y-sm);
  svg {
    position: absolute;
    width: 24px;
    height: 24px;
    color: var(--theme-color-dark);

    &:first-of-type {
      top: 0;
      left: 0;
      transform: translate(-100%, -25%);
    }

    &:last-of-type {
      bottom: 0;
      right: 0;
      transform: translate(100%, 25%);
    }
  }
`;

const Title = styled.p`
  font-weight: bold;
  color: var(--theme-color-dark);
`;

const SmallIcon = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: var(--spacing-x-sm);
  color: var(--theme-color-dark);

  svg {
    width: 100%;
    height: 100%;
  }
`;

export default function ReviewSummary({ review }) {
  return (
    <Container>
      <Heading>
        <Icon>{ICONS[review.name]}</Icon>
        <Title>{review.title}</Title>
      </Heading>
      <Content>
        <Quote>
          <QuoteLeft />
          <Text textStyle="italic">{review.text}</Text>
          <QuoteRight />
        </Quote>
        <Text size="sm">
          <SmallIcon>
            <Pen />
          </SmallIcon>

          {review.author}
        </Text>
        <Text size="sm">
          <SmallIcon>
            <Calendar />
          </SmallIcon>

          {review.date}
        </Text>
      </Content>
    </Container>
  );
}

import React from "react";
import { Header, Layout, Section, Text } from "@components/index";
import bannerImg from "../images/banner_bathroom.jpg";

export default function About() {
  return (
    <Layout title="About">
      <Header image={bannerImg} position="br">
        <Text size="xl" weight="bold" noMargin>
          <em>Easy as</em> ABC
        </Text>
      </Header>
      <Section title="About ABC Project Design">
        <Text>
          ABC Project Design Ltd is a medium sized family run business with more
          than 30 years experience in the building and construction industry. We
          offer a fully certified and accredited bathroom refurbishment service.
        </Text>
        <Text>
          We currently have 15 skilled tradesman within our workforce and
          operate in Essex, Hertfordshire, Kent and London. Our team include
          plumbers, carpenters, bathroom fitters, tilers, electricians,
          plasterers, painters and decorators. All our staff are vetted and have
          vast experience in there chosen fields.
        </Text>
        <Text>
          We specialise in bathroom refurbishments and floor tiling. Our
          stonemasons and tilers are specialists in ceramic, natural stone,
          marble, quartz, porcelain and mosaic tiles.
        </Text>
        <Text>
          Customer satisfaction is of paramount importance to us this and is
          reflected in our many five star reviews on Rated People and Bark. We
          strive to maximise our relationship with our customers by being honest
          and fair.
        </Text>
        <Text>
          We are fully insured and all work undertaken is guaranteed. Pricing is
          something we take extremely seriously and we aim to be ultra
          competitive.
        </Text>
      </Section>
    </Layout>
  );
}

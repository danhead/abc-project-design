import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import { Header, Heading, Section, Text } from "../components";

export default function Index({ data }) {
  return (
    <Layout location="/about">
      <Header
        image={data.headerImage.childImageSharp.fluid}
        position="bottom right"
      >
        <Heading shadow="xl-white">
          <em>Easy as</em> ABC
        </Heading>
      </Header>
      <Section heading="About ABC Project Design">
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
          reflected in our many five star reviews on Checkatrade, Rated People
          and Bark. We strive to maximise our relationship with our customers by
          being honest and fair.
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

export const query = graphql`
  query {
    headerImage: file(relativePath: { eq: "bathroom3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

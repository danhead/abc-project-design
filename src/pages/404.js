import React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Layout from "../layout";
import { Header, Heading, Link, Section, Text } from "../components";

const Container = styled.div`
  text-align: center;
`;

export default function Index({ data }) {
  return (
    <Layout title="Page not found">
      <Header image={data.headerImage.childImageSharp.fluid}>
        <Heading shadow="xl-light">Page not found</Heading>
        <Text size="lg">404</Text>
      </Header>
      <Section>
        <Container>
          <Link to="/">Back Home</Link>
        </Container>
      </Section>
    </Layout>
  );
}

export const query = graphql`
  query {
    headerImage: file(relativePath: { eq: "banner_bathroom.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

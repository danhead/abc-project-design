import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import { Header, Link, Section } from "../components";

export default function Index({ data }) {
  return (
    <Layout>
      <Header image={data.headerImage.childImageSharp.fluid}>
        <h2>404</h2>
      </Header>
      <Section>
        <p>Page not found</p>
        <Link to="/">Back Home</Link>
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

import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../layout";
import Header from "../components/header";
import HeaderLogo from "../components/header-logo";
import Section from "../components/section";

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
    headerImage: file(relativePath: { eq: "bathroom.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

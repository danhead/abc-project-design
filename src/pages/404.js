import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import Header from "../components/header";
import HeaderLogo from "../components/header-logo";
import Section from "../components/section";

export default function Index({ data }) {
  return (
    <Layout>
      <Header image={data.headerImage.childImageSharp.fluid}>
        <HeaderLogo visible={true} />
        <h2>404</h2>
      </Header>
      <Section variant="primary">oops.</Section>
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

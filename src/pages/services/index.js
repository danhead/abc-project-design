import React from "react";
import { graphql } from "gatsby";
import Layout from "../../layout";
import { Header } from "../../components";

export default function Index({ data }) {
  return (
    <Layout location="/services">
      <Header image={data.headerImage.childImageSharp.fluid}>
        <h1>Services</h1>
      </Header>
    </Layout>
  );
}

export const query = graphql`
  query {
    headerImage: file(relativePath: { eq: "bathroom2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

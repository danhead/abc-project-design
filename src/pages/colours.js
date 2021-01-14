import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import Header from "../components/header";
import HeaderLogo from "../components/header-logo";
import Section from "../components/section";
import Text from "../components/text";

export default function Index({ data }) {
  return (
    <Layout>
      <Header image={data.headerImage.childImageSharp.fluid}>
        <HeaderLogo>
          <h1>ABC Project Design</h1>
          <p>Easy as ABC</p>
        </HeaderLogo>
      </Header>
      <Section>
        <Text
          style={{
            "background-color": "var(--theme-color-primary)"
          }}
        >
          --theme-color-primary: #9c0905;
        </Text>
        <Text
          style={{
            "background-color": "var(--theme-color-secondary)"
          }}
        >
          --theme-color-secondary: #9590a8;
        </Text>
        <Text
          style={{
            "background-color": "var(--theme-color-tertiary)"
          }}
        >
          --theme-color-tertiary: #bbcbcb;
        </Text>
        <Text
          style={{
            "background-color": "var(--theme-color-light)"
          }}
        >
          --theme-color-light: #e5ffde;
        </Text>
        <Text
          style={{
            "background-color": "var(--theme-color-dark)",
            color: "white"
          }}
        >
          --theme-color-dark: #000a61;
        </Text>
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

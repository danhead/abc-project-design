import React from "react";
import { graphql } from "gatsby";
import Layout from "../../layout";
import { Card, Grid, Header, Heading, Section } from "../../components";

export default function Index({ data }) {
  return (
    <Layout location="/services">
      <Header image={data.headerImage.childImageSharp.fluid}>
        <Heading shadow="xl-white">Services</Heading>
      </Header>
      <Section>
        <Grid columns={[1, 2]}>
          <Card
            to="/services/bathrooms"
            image={data.bathroomImage.childImageSharp.fluid}
            heading={<Heading el="h3">Bathrooms</Heading>}
          >
            Fully accredited bathroom refurbishment service
          </Card>
          <Card
            to="/services/tiling"
            image={data.tilingImage.childImageSharp.fluid}
            heading={<Heading el="h3">Tiling</Heading>}
          >
            We can install many different styles
          </Card>
        </Grid>
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
    bathroomImage: file(relativePath: { eq: "bathroom.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 480, maxHeight: 320, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    tilingImage: file(relativePath: { eq: "tiling.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 480, maxHeight: 320, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

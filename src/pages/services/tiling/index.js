import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../layout";
import {
  Card,
  Grid,
  Header,
  Heading,
  Section,
  Text
} from "../../../components";

export default function Index({ data }) {
  return (
    <Layout location="/services/tiling" title="Tiling">
      <Header image={data.headerImage.childImageSharp.fluid}>
        <Heading shadow="xl-white">Tiling</Heading>
      </Header>
      <Section heading="We specialise in floor tiling">
        <Text>
          We can install both floor and wall tiles, including ceramic, natural
          stone, marble, quartz, porcelain and mosaic tiles.
        </Text>
        <Text>
          Our elite team of 3 stonemasons and 3 tilers has a combined total of
          112 years of experience within the industry.
        </Text>
      </Section>
      <Section heading="Case studies" variant="primary">
        <Grid columns={[1, 2, 3]} breakpoints={["30em", "45em"]}>
          <Card
            to="/services/tiling/case-study-1"
            image={data.images.nodes[0].childImageSharp.fluid}
            heading={<Heading el="h3">New Extension</Heading>}
          >
            Eltham, London
          </Card>
          <Card
            to="/services/tiling/case-study-2"
            image={data.images.nodes[1].childImageSharp.fluid}
            heading={<Heading el="h3">Ceramic Floor Tiles</Heading>}
          >
            Brentwood, Essex
          </Card>
          <Card
            to="/services/tiling/case-study-3"
            image={data.images.nodes[2].childImageSharp.fluid}
            heading={<Heading el="h3">Period Floor Tiles</Heading>}
          >
            Barnes, London
          </Card>
          <Card
            to="/services/tiling/case-study-4"
            image={data.images.nodes[3].childImageSharp.fluid}
            heading={<Heading el="h3">Wood Effect Porcelain</Heading>}
          >
            Charlton, London
          </Card>
          <Card
            to="/services/tiling/case-study-5"
            image={data.images.nodes[4].childImageSharp.fluid}
            heading={<Heading el="h3">Period Floor Tiles</Heading>}
          >
            Chelsea, London
          </Card>
          <Card
            to="/services/tiling/case-study-6"
            image={data.images.nodes[5].childImageSharp.fluid}
            heading={<Heading el="h3">Patterned Floor Tiles</Heading>}
          >
            Fulham, London
          </Card>
        </Grid>
      </Section>
    </Layout>
  );
}

export const query = graphql`
  query {
    headerImage: file(relativePath: { eq: "banner_tiling.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    images: allFile(
      filter: { relativePath: { regex: "/tiling-cs(1d|2e|3a|4a|5a|6a).jpg$/" } }
      sort: { fields: relativePath }
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 640, maxHeight: 480, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;

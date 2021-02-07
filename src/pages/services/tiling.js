import React from "react";
import { graphql } from "gatsby";
import Layout from "../../layout";
import { Card, Grid, Header, Heading, Section, Text } from "../../components";

export default function Index({ data }) {
  return (
    <Layout location="/services/tiling" title="Tiling">
      <Header image={data.headerImage.childImageSharp.fluid}>
        <Heading shadow="xl-black" color="dark-grey">
          Tiling
        </Heading>
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
          {data.caseStudies.nodes.map((cs, i) => (
            <Card
              key={i}
              to={cs.path}
              image={data.images.nodes[i].childImageSharp.fluid}
              heading={<Heading el="h3">{cs.title}</Heading>}
            >
              {cs.location}
            </Card>
          ))}
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
    caseStudies: allCaseStudy(
      filter: { type: { eq: "tiling" } }
      sort: { fields: path }
    ) {
      nodes {
        title
        location
        path
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

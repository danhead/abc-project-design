import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../layout";
import {
  CustomGallery,
  Header,
  Heading,
  Section,
  Table,
  Text
} from "../../../components";

export default function Index({ data }) {
  const images = data.images.nodes.map(node => node.childImageSharp);
  return (
    <Layout
      location="/services/tiling/case-study-2"
      title="Ceramic Floor Tiles Case Study"
    >
      <Header image={images[3].full}>
        <Heading shadow="xl-white">Ceramic Floor Tiles</Heading>
        <Text size="lg">Brentwood, Essex</Text>
      </Header>
      <Section>
        <Table>
          <tbody>
            <tr>
              <td>Key features</td>
              <td>Ceramic floor tiles</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>£1,100</td>
            </tr>
            <tr>
              <td>Time taken</td>
              <td>1 day</td>
            </tr>
            <tr>
              <td>Date</td>
              <td>December 2020</td>
            </tr>
          </tbody>
        </Table>
        <Text>
          The client needed 19m<sup>2</sup> of ceramic floor tiles fitted at
          short notice.
        </Text>
        <Text>
          We first applied self leveling compound as the concrete floor was
          quite uneven. After 2 days to allow for the compound to completely
          dry, we returned to install the tiles.
        </Text>
        <Text>
          The installation was completed in one day and the client was able to
          continue with the kitchen installation the following day.
        </Text>
        <Text>
          The client provided the ceramic floor tiles and we provided the
          levelling compound, adhesive and grout.
        </Text>
        <Text>Total price for labour and materials: £1,100.</Text>
      </Section>
      <Section heading="Gallery" variant="primary">
        <CustomGallery images={images} />
      </Section>
    </Layout>
  );
}

export const query = graphql`
  query {
    images: allFile(
      filter: { relativePath: { regex: "/tiling-cs2(.*).jpg$/" } }
      sort: { fields: relativePath }
    ) {
      nodes {
        childImageSharp {
          thumb: fluid(maxWidth: 256, maxHeight: 256, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
          full: fluid(maxWidth: 1280, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;

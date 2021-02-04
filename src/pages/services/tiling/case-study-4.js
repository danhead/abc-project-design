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
      location="/services/tiling/case-study-4"
      title="Wood Effect Porcelain Case Study"
    >
      <Header image={images[0].full}>
        <Heading shadow="xl-white">Wood Effect Porcelain</Heading>
        <Text size="lg">Charlton, London</Text>
      </Header>
      <Section>
        <Table>
          <tbody>
            <tr>
              <td>Key features</td>
              <td>Wood effect porcelain tiles</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>£3,100</td>
            </tr>
            <tr>
              <td>Time taken</td>
              <td>7 days</td>
            </tr>
            <tr>
              <td>Date</td>
              <td>October 2020</td>
            </tr>
          </tbody>
        </Table>
        <Text>
          Client needed old wooden floor removed. Once floor was removed 12mm
          concrete boards were laid to create a solid foundation.
        </Text>
        <Text>
          50m<sup>2</sup> long porcelain tiles were laid sealed and grouted.
        </Text>
        <Text>
          All rubbish was removed from site and included in the price.
        </Text>
        <Text>We supplied all materials except tiles.</Text>
        <Text>Total price for labour and materials: £3,100.</Text>
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
      filter: { relativePath: { regex: "/tiling-cs4(.*).jpg$/" } }
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

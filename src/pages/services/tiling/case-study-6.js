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
      location="/services/tiling/case-study-6"
      title="Patterned Floor Tiles Case Study"
    >
      <Header image={images[0].full}>
        <Heading shadow="xl-black">Patterned Floor Tiles</Heading>
        <Text size="lg">Fulham, London</Text>
      </Header>
      <Section>
        <Table>
          <tbody>
            <tr>
              <td>Key features</td>
              <td>Under floor heating</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>£4,500</td>
            </tr>
            <tr>
              <td>Time taken</td>
              <td>1 week</td>
            </tr>
            <tr>
              <td>Date</td>
              <td>October 2020</td>
            </tr>
          </tbody>
        </Table>
        <Text>
          Removed old flooring and adhesive and disposed of all rubbish.
        </Text>
        <Text>
          Installed electric under floor heating and laid 35m<sup>2</sup> of new
          tiles.
        </Text>
        <Text>Total price for labour and materials: £4,500.</Text>
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
      filter: { relativePath: { regex: "/tiling-cs6(.*).jpg$/" } }
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

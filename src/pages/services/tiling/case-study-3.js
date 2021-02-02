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
      location="/services/tiling/case-study-3"
      title="Period Floor Tiles Case Study"
    >
      <Header image={images[0].full}>
        <Heading shadow="xl-black">Period Floor Tiles</Heading>
        <Text size="lg">Barnes, London</Text>
      </Header>
      <Section>
        <Table>
          <tbody>
            <tr>
              <td>Key features</td>
              <td>Period style tiles</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>£2,100</td>
            </tr>
            <tr>
              <td>Time taken</td>
              <td>5 days</td>
            </tr>
            <tr>
              <td>Date</td>
              <td>October 2020</td>
            </tr>
          </tbody>
        </Table>
        <Text>
          This room had old porcelain tiles, which we removed and disposed. We
          then applied self levelling compound to the floor and allowed to set
          for 24 hours.
        </Text>
        <Text>All skirting and radiators were removed.</Text>
        <Text>
          20m<sup>2</sup> of new tiles were laid and sealed for protection.
        </Text>
        <Text>Total price for labour and materials: £2,100.</Text>
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
      filter: { relativePath: { regex: "/tiling-cs3(.*).jpg$/" } }
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
